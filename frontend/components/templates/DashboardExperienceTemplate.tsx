import LazyMount from "@components/molecules/LazyMount";
import ExperienceRoleEditor from "@components/organisms/ExperienceRoleEditor";
import {
  isDraftExperienceId,
  type ExperienceRole,
} from "@services/experienceService";
import styles from "./DashboardExperienceTemplate.module.css";

type DashboardExperienceTemplateProps = {
  roles: ExperienceRole[];
  savingId?: string;
  readOnly?: boolean;
  status?: string;
  onSave: (role: ExperienceRole) => void;
  onDelete: (role: ExperienceRole) => void;
  onAddRole: () => void;
};

const DashboardExperienceTemplate = ({
  roles,
  savingId,
  readOnly,
  status,
  onSave,
  onDelete,
  onAddRole,
}: DashboardExperienceTemplateProps) => {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>Experience</h1>
          <button
            type="button"
            className={styles.addButton}
            onClick={onAddRole}
            disabled={readOnly}
          >
            Add role
          </button>
        </div>
        <p className={styles.lead}>
          Edit each role below and save. Changes persist in the database and feed your public
          experience page.
        </p>
        {status ? (
          <p className={readOnly ? styles.notice : styles.status} role="status">
            {status}
          </p>
        ) : null}
      </header>
      <div className={styles.list}>
        {roles.map((role, index) => {
          const editor = (
            <ExperienceRoleEditor
              role={role}
              isNew={isDraftExperienceId(role.id)}
              disabled={readOnly || savingId === role.id}
              onSave={onSave}
              onDelete={() => onDelete(role)}
            />
          );

          if (index === 0) {
            return <div key={role.id}>{editor}</div>;
          }

          return (
            <LazyMount key={role.id} minHeight={640}>
              {editor}
            </LazyMount>
          );
        })}
      </div>
    </section>
  );
};

export default DashboardExperienceTemplate;