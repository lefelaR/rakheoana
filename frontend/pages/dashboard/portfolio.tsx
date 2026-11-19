import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "components/layouts/dashboardLayout";
import DashboardPortfolioTemplate from "@components/templates/DashboardPortfolioTemplate";
import {
  createBlankPortfolioProject,
  createPortfolio,
  deletePortfolio,
  getPortfolio,
  isDraftPortfolioId,
  updatePortfolio,
  type PortfolioProject,
} from "@services/portfolioService";

const DashboardPortfolio = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [savingId, setSavingId] = useState<string>();
  const [readOnly, setReadOnly] = useState(false);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    let active = true;

    getPortfolio()
      .then((records) => {
        if (!active) {
          return;
        }
        setProjects(records);
        setReadOnly(false);
        setStatus("");
        setLoading(false);
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setProjects([]);
        setReadOnly(true);
        setStatus("Could not load portfolio projects from the API.");
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const onAddProject = (period: PortfolioProject["period"]) => {
    setProjects((current) => [createBlankPortfolioProject(period), ...current]);
  };

  const onSave = async (project: PortfolioProject) => {
    if (readOnly) {
      toast.error("The portfolio API is unavailable, so this project was not saved.");
      return;
    }

    const { id, ...payload } = project;
    setSavingId(id);

    try {
      if (isDraftPortfolioId(id)) {
        const saved = await createPortfolio(payload);
        setProjects((current) =>
          current.map((item) => (item.id === id ? saved : item))
        );
        toast.success(`${saved.title} added.`);
      } else {
        const saved = await updatePortfolio(id, payload);
        setProjects((current) =>
          current.map((item) => (item.id === id ? saved : item))
        );
        toast.success(`${saved.title} saved.`);
      }
    } catch {
      toast.error("Could not save this project.");
    } finally {
      setSavingId(undefined);
    }
  };

  const onDelete = async (project: PortfolioProject) => {
    if (isDraftPortfolioId(project.id)) {
      setProjects((current) => current.filter((item) => item.id !== project.id));
      return;
    }

    if (readOnly) {
      toast.error("The portfolio API is unavailable, so this project was not deleted.");
      return;
    }

    setSavingId(project.id);

    try {
      await deletePortfolio(project.id);
      setProjects((current) => current.filter((item) => item.id !== project.id));
      toast.success(`${project.title || "Project"} deleted.`);
    } catch {
      toast.error("Could not delete this project.");
    } finally {
      setSavingId(undefined);
    }
  };

  return (
    <Layout loading={loading} loadingLabel="Loading portfolio.">
      <DashboardPortfolioTemplate
        projects={projects}
        savingId={savingId}
        readOnly={readOnly}
        status={status}
        onSave={onSave}
        onDelete={onDelete}
        onAddProject={onAddProject}
      />
    </Layout>
  );
};

export default DashboardPortfolio;
