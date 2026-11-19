import PortfolioProjectEditor from "@components/organisms/PortfolioProjectEditor";
import {
  isDraftPortfolioId,
  portfolioPeriods,
  type PortfolioProject,
} from "@services/portfolioService";
import styles from "./DashboardPortfolioTemplate.module.css";

type DashboardPortfolioTemplateProps = {
  projects: PortfolioProject[];
  savingId?: string;
  readOnly?: boolean;
  status?: string;
  onSave: (project: PortfolioProject) => void;
  onDelete: (project: PortfolioProject) => void;
  onAddProject: (period: PortfolioProject["period"]) => void;
};

const DashboardPortfolioTemplate = ({
  projects,
  savingId,
  readOnly,
  status,
  onSave,
  onDelete,
  onAddProject,
}: DashboardPortfolioTemplateProps) => {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>Portfolio</h1>
        </div>
        <p className={styles.lead}>
          Edit the work samples below and save. Clients stay as credits, not employers.
          Changes persist in the database and feed your public portfolio page.
        </p>
        {status ? (
          <p className={readOnly ? styles.notice : styles.status} role="status">
            {status}
          </p>
        ) : null}
      </header>
      {portfolioPeriods.map((period) => {
        const items = projects.filter((project) => project.period === period.id);
        return (
          <section key={period.id} className={styles.group} aria-labelledby={`${period.id}-heading`}>
            <div className={styles.groupHeader}>
              <h2 id={`${period.id}-heading`} className={styles.groupTitle}>
                {period.label}
              </h2>
              <button
                type="button"
                className={styles.addButton}
                onClick={() => onAddProject(period.id)}
                disabled={readOnly}
              >
                Add project
              </button>
            </div>
            {items.length === 0 ? (
              <p className={styles.empty}>No projects in this section yet.</p>
            ) : (
              <div className={styles.list}>
                {items.map((project) => (
                  <PortfolioProjectEditor
                    key={project.id}
                    project={project}
                    isNew={isDraftPortfolioId(project.id)}
                    disabled={readOnly || savingId === project.id}
                    onSave={onSave}
                    onDelete={() => onDelete(project)}
                  />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </section>
  );
};

export default DashboardPortfolioTemplate;
