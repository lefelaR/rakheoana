import { useEffect, useId, useRef, useState, type ChangeEvent, type DragEvent } from "react";
import styles from "./ImageDropField.module.css";

type ImageDropFieldProps = {
  id: string;
  value?: string;
  disabled?: boolean;
  onChange: (image: string) => void;
};

const acceptedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const maxEdge = 1400;
const maxDataUrlLength = 320_000;

const readFile = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
        return;
      }
      reject(new Error("Could not read that image."));
    };
    reader.onerror = () => reject(new Error("Could not read that image."));
    reader.readAsDataURL(file);
  });

const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not read that image."));
    image.src = src;
  });

const paint = (
  image: HTMLImageElement,
  edge: number,
  type: "image/jpeg" | "image/png",
  quality: number
) => {
  const scale = Math.min(1, edge / Math.max(image.width, image.height));
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Could not read that image.");
  }
  if (type === "image/jpeg") {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
  }
  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL(type, quality);
};

const imageFileToDataUrl = async (file: File) => {
  if (!acceptedTypes.has(file.type) || file.size === 0) {
    throw new Error("Use a PNG, JPG, WEBP, or GIF.");
  }

  const source = await loadImage(await readFile(file));
  const keepPng = file.type === "image/png";
  let edge = maxEdge;
  let quality = 0.82;

  for (let attempt = 0; attempt < 7; attempt += 1) {
    const type = keepPng && attempt < 2 ? "image/png" : "image/jpeg";
    const url = paint(source, edge, type, quality);
    if (url.length <= maxDataUrlLength) {
      return url;
    }
    edge = Math.round(edge * 0.72);
    quality = Math.max(0.55, quality - 0.08);
  }

  throw new Error("That image is too large. Try a smaller file.");
};

const ImageDropField = ({ id, value, disabled, onChange }: ImageDropFieldProps) => {
  const hintId = useId();
  const errorId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const dragDepth = useRef(0);
  const alive = useRef(true);
  const [active, setActive] = useState(false);
  const [reading, setReading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  const accept = async (file: File) => {
    setError("");
    setReading(true);
    try {
      const image = await imageFileToDataUrl(file);
      if (!alive.current) {
        return;
      }
      onChange(image);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (cause) {
      if (!alive.current) {
        return;
      }
      setError(cause instanceof Error ? cause.message : "Could not read that image.");
    } finally {
      if (alive.current) {
        setReading(false);
      }
    }
  };

  const onDragEnter = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    if (disabled || reading) {
      return;
    }
    dragDepth.current += 1;
    setActive(true);
  };

  const onDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = disabled || reading ? "none" : "copy";
  };

  const onDragLeave = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    dragDepth.current = Math.max(0, dragDepth.current - 1);
    if (dragDepth.current === 0) {
      setActive(false);
    }
  };

  const onDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    dragDepth.current = 0;
    setActive(false);
    if (disabled || reading) {
      return;
    }
    const file = event.dataTransfer.files?.[0];
    if (!file) {
      setError("Drop an image file.");
      return;
    }
    void accept(file);
  };

  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      void accept(file);
    }
  };

  const clear = () => {
    setError("");
    onChange("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const describedBy = error ? `${hintId} ${errorId}` : hintId;

  return (
    <div className={styles.field}>
      <span className={styles.label}>Project image</span>
      <label
        className={`${styles.drop} ${active ? styles.active : ""} ${
          disabled ? styles.disabled : ""
        }`}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={styles.preview} src={value} alt="" loading="lazy" decoding="async" />
        ) : null}
        <span className={styles.hint} id={hintId}>
          {reading
            ? "Reading image…"
            : value
              ? "Drop a new image to replace it, or click to browse."
              : "Drag an image here, or click to browse."}
        </span>
        <span className={styles.formats}>PNG, JPG, WEBP, or GIF. Large images are resized.</span>
        <input
          ref={inputRef}
          id={id}
          className={styles.file}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          aria-label="Project image"
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
          aria-busy={reading || undefined}
          disabled={disabled || reading}
          onChange={onInput}
        />
      </label>
      {value ? (
        <button type="button" className={styles.remove} onClick={clear} disabled={disabled || reading}>
          Remove image
        </button>
      ) : null}
      {error ? (
        <p className={styles.error} id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default ImageDropField;
