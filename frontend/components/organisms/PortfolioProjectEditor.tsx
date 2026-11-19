import { useEffect, useState, type FormEvent } from "react";
import ImageDropField from "@components/molecules/ImageDropField";
import {
  portfolioPeriods,
  type PortfolioProject,
} from "@services/portfolioService";
import styles from "./PortfolioProjectEditor.module.css";

type PortfolioProjectEditorProps = {
  project: PortfolioProject;
  disabled?: boolean;
  isNew?: boolean;
  onSave: (project: PortfolioProject) => void;
  onDelete: () => void;
};

const PortfolioProjectEditor = ({
  project,
  disabled,
  isNew,
  onSave,
  onDelete,
}: PortfolioProjectEditorProps) => {
  const [draft, setDraft] = useState(project);
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  useEffect(() => {
    setDraft(project);
    setConfirmingDelete(false);
  }, [project]);

  const setField = <K extends keyof PortfolioProject>(
    key: K,
    value: PortfolioProject[K]
  ) => {
    setDraft((current) => ({ ...current, [key]: value }));
  };

  const fileImage = isNew || Boolean(draft.image?.startsWith("data:"));

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSave({
      ...draft,
      title: draft.title.trim(),
      credit: draft.credit?.trim() || undefined,
      url: draft.url?.trim() || undefined,
      image: draft.image?.trim() || undefined,
    });
  };

  return (
    <form
      className={styles.card}
      onSubmit={onSubmit}
      aria-labelledby={`${project.id}-heading`}
    >
      <p id={`${project.id}-heading`} className={styles.srOnly}>
        Edit {project.title || "new project"}
      </p>
      {!fileImage && draft.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.preview} src={draft.image} alt="" loading="lazy" decoding="async" />
      ) : null}
      <label className={styles.field}>
        <span className={styles.label}>Title</span>
        <input
          className={styles.input}
          value={draft.title}
          onChange={(event) => setField("title", event.target.value)}
          required
          disabled={disabled}
        />
      </label>
      <div className={styles.fieldRow}>
        <label className={styles.field}>
          <span className={styles.label}>Credit (studio or client)</span>
          <input
            className={styles.input}
            value={draft.credit ?? ""}
            onChange={(event) => setField("credit", event.target.value)}
            disabled={disabled}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Section</span>
          <select
            className={styles.input}
            value={draft.period}
            onChange={(event) =>
              setField("period", event.target.value as PortfolioProject["period"])
            }
            disabled={disabled}
          >
            {portfolioPeriods.map((period) => (
              <option key={period.id} value={period.id}>
                {period.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className={styles.field}>
        <span className={styles.label}>Live URL</span>
        <input
          className={styles.input}
          type="url"
          value={draft.url ?? ""}
          onChange={(event) => setField("url", event.target.value)}
          disabled={disabled}
        />
      </label>
      {fileImage ? (
        <ImageDropField
          id={`${project.id}-image`}
          value={draft.image}
          disabled={disabled}
          onChange={(image) => setField("image", image)}
        />
      ) : (
        <label className={styles.field}>
          <span className={styles.label}>Image path</span>
          <input
            className={styles.input}
            value={draft.image ?? ""}
            onChange={(event) => setField("image", event.target.value)}
            disabled={disabled}
          />
        </label>
      )}
      <div className={styles.actions}>
        <button type="submit" className={styles.save} disabled={disabled}>
          Save
        </button>
        {confirmingDelete ? (
          <div className={styles.confirm} role="group" aria-labelledby={`${project.id}-delete`}>
            <p className={styles.confirmText} id={`${project.id}-delete`}>
              {isNew
                ? "Discard this project?"
                : "Delete this project? It will leave your public portfolio page."}
            </p>
            <button type="button" className={styles.delete} onClick={onDelete} disabled={disabled}>
              Delete
            </button>
            <button
              type="button"
              className={styles.cancel}
              onClick={() => setConfirmingDelete(false)}
              disabled={disabled}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            className={styles.delete}
            onClick={() => setConfirmingDelete(true)}
            disabled={disabled}
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default PortfolioProjectEditor;
