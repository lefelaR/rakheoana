import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "components/layouts/dashboardLayout";
import DashboardPortfolioTemplate from "@components/templates/DashboardPortfolioTemplate";
import {
  createBlankPortfolioProject,
  createPortfolio,
  getPortfolio,
  isDraftPortfolioId,
  updatePortfolio,
  type PortfolioProject,
} from "@services/portfolioService";

const DashboardPortfolio = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [savingId, setSavingId] = useState<string>();
  const [readOnly, setReadOnly] = useState(false);
  const [status, setStatus] = useState("Loading portfolio.");

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
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setProjects([]);
        setReadOnly(true);
        setStatus("Could not load portfolio projects from the API.");
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

  return (
    <Layout>
      <DashboardPortfolioTemplate
        projects={projects}
        savingId={savingId}
        readOnly={readOnly}
        status={status}
        onSave={onSave}
        onAddProject={onAddProject}
      />
    </Layout>
  );
};

export default DashboardPortfolio;
