import { useEffect, useRef, useState, type ReactNode } from "react";

type LazyMountProps = {
  children: ReactNode;
  /** Placeholder height before the block is near the viewport. */
  minHeight?: number;
};

/**
 * Mounts children once they are near the viewport.
 * Use for private, heavy UI that does not need to be in the first HTML.
 */
const LazyMount = ({ children, minHeight = 320 }: LazyMountProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={show ? undefined : { minHeight }} aria-hidden={show ? undefined : true}>
      {show ? children : null}
    </div>
  );
};

export default LazyMount;
