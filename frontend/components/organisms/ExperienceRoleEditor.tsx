import { useEffect, useState, type FormEvent } from "react";
import RichTextField from "@components/molecules/RichTextField";
import {
  highlightText,
  highlightsToHtml,
  htmlToHighlights,
} from "@components/molecules/richText";
import type { ExperienceRole } from "@services/experienceService";
import styles from "@components/molecules/ExperienceRoleCard.module.css";

type ExperienceRoleEditorProps = {
  role: ExperienceRole;
  disabled?: boolean;
  isNew?: boolean;
  onSave: (role: ExperienceRole) => void;
  onDelete: () => void;
};

const ExperienceRoleEditor = ({
  role,
  disabled,
  isNew,
  onSave,
  onDelete,
}: ExperienceRoleEditorProps) => {
  const [draft, setDraft] = useState(role);
  const [body, setBody] = useState(() => highlightsToHtml(role.highlights));
  const [highlightError, setHighlightError] = useState("");
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  useEffect(() => {
    setDraft(role);
    setBody(highlightsToHtml(role.highlights));
    setHighlightError("");
    setConfirmingDelete(false);
  }, [role]);

  const setField = <K extends keyof ExperienceRole>(key: K, value: ExperienceRole[K]) => {
    setDraft((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const highlights = htmlToHighlights(body).filter((line) => highlightText(line).length > 0);
    if (highlights.length === 0) {
      setHighlightError("Add at least one highlight.");
      return;
    }

    setHighlightError("");
    onSave({ ...draft, highlights });
  };

  return (
    <form className={styles.card} onSubmit={onSubmit} aria-labelledby={`${role.id}-heading`}>
      <header className={styles.header}>
        <p id={`${role.id}-heading`} className={styles.srOnly}>
          Edit {role.company}
        </p>
        <label className={styles.field}>
          <span className={styles.label}>Company</span>
          <input
            className={styles.input}
            value={draft.company}
            onChange={(event) => setField("company", event.target.value)}
            required
            disabled={disabled}
          />
        </label>
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
            <span className={styles.label}>Start</span>
            <input
              className={styles.input}
              value={draft.startDate}
              onChange={(event) => setField("startDate", event.target.value)}
              required
              disabled={disabled}
            />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>End (empty = present)</span>
            <input
              className={styles.input}
              value={draft.endDate ?? ""}
              onChange={(event) =>
                setField("endDate", event.target.value.trim() ? event.target.value : null)
              }
              disabled={disabled}
            />
          </label>
        </div>
        <label className={styles.field}>
          <span className={styles.label}>Location</span>
          <input
            className={styles.input}
            value={draft.location}
            onChange={(event) => setField("location", event.target.value)}
            required
            disabled={disabled}
          />
        </label>
      </header>
      <label className={styles.field}>
        <span className={styles.label}>Stack</span>
        <input
          className={styles.input}
          value={draft.stack ?? ""}
          onChange={(event) => setField("stack", event.target.value)}
          disabled={disabled}
        />
      </label>
      <RichTextField
        label="Highlights"
        value={body}
        placeholder="Add a highlight"
        disabled={disabled}
        error={highlightError}
        onChange={(html) => {
          setHighlightError("");
          setBody(html);
        }}
      />
      <div className={styles.actions}>
        <button type="submit" className={styles.save} disabled={disabled}>
          Save
        </button>
        {confirmingDelete ? (
          <div className={styles.confirm} role="group" aria-labelledby={`${role.id}-delete`}>
            <p className={styles.confirmText} id={`${role.id}-delete`}>
              {isNew
                ? "Discard this role?"
                : "Delete this role? It will leave your public experience page."}
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

export default ExperienceRoleEditor;
