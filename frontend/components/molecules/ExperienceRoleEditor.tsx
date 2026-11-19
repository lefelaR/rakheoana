import { useEffect, useState, type FormEvent } from "react";
import type { ExperienceRole } from "@services/experienceService";
import styles from "./ExperienceRoleCard.module.css";

type ExperienceRoleEditorProps = {
  role: ExperienceRole;
  disabled?: boolean;
  isNew?: boolean;
  onSave: (role: ExperienceRole) => void;
};

const ExperienceRoleEditor = ({ role, disabled, isNew, onSave }: ExperienceRoleEditorProps) => {
  const [draft, setDraft] = useState(role);

  useEffect(() => {
    setDraft(role);
  }, [role]);

  const setField = <K extends keyof ExperienceRole>(key: K, value: ExperienceRole[K]) => {
    setDraft((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const highlights = draft.highlights.filter((line) => line.trim().length > 0);
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
      <label className={styles.field}>
        <span className={styles.label}>Highlights (one per line)</span>
        <textarea
          className={styles.textarea}
          rows={5}
          value={draft.highlights.join("\n")}
          onChange={(event) =>
            setField(
              "highlights",
              event.target.value.split("\n").map((line) => line.trimEnd())
            )
          }
          required
          disabled={disabled}
        />
      </label>
      <button type="submit" className={styles.save} disabled={disabled}>
        {isNew ? "Add role" : "Save role"}
      </button>
    </form>
  );
};

export default ExperienceRoleEditor;