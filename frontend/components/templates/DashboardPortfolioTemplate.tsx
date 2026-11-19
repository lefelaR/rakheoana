import PortfolioProjectEditor from "@components/molecules/PortfolioProjectEditor";
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
  onAddProject: () => void;
};

const DashboardPortfolioTemplate = ({
  projects,
  savingId,
  readOnly,
  status,
  onSave,
  onAddProject,
}: DashboardPortfolioTemplateProps) => {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>Portfolio</h1>
          <button
            type="button"
            className={styles.addButton}
            onClick={onAddProject}
            disabled={readOnly}
          >
            Add project
          </button>
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
      {projects.some((project) => isDraftPortfolioId(project.id)) ? (
        <section className={styles.group} aria-labelledby="new-projects-heading">
          <h2 id="new-projects-heading" className={styles.groupTitle}>
            New project
          </h2>
          <div className={styles.list}>
            {projects
              .filter((project) => isDraftPortfolioId(project.id))
              .map((project) => (
                <PortfolioProjectEditor
                  key={project.id}
                  project={project}
                  isNew
                  disabled={readOnly || savingId === project.id}
                  onSave={onSave}
                />
              ))}
          </div>
        </section>
      ) : null}
      {portfolioPeriods.map((period) => {
        const items = projects.filter(
          (project) => !isDraftPortfolioId(project.id) && project.period === period.id
        );
        return (
          <section key={period.id} className={styles.group} aria-labelledby={`${period.id}-heading`}>
            <h2 id={`${period.id}-heading`} className={styles.groupTitle}>
              {period.label}
            </h2>
            {items.length === 0 ? (
              <p className={styles.empty}>No projects in this section yet.</p>
            ) : (
              <div className={styles.list}>
                {items.map((project) => (
                  <PortfolioProjectEditor
                    key={project.id}
                    project={project}
                    disabled={readOnly || savingId === project.id}
                    onSave={onSave}
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
