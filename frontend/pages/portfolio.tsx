import { useEffect, useState } from "react";
import Layout from "@components/layouts/frontendLayout";
import SitePortfolioTemplate from "@components/templates/SitePortfolioTemplate";
import { getPortfolio, type PortfolioProject } from "@services/portfolioService";

const Portfolio = () => {
  const [projects, setProjects] = useState<PortfolioProject[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    getPortfolio()
      .then((records) => {
        if (active) {
          setFailed(false);
          setProjects(records);
        }
      })
      .catch(() => {
        if (active) {
          setFailed(true);
          setProjects([]);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <Layout>
      {projects === null ? (
        <section className="work-area pt-125 pb-130">
          <div className="container">
            <p className="text-center">Loading portfolio.</p>
          </div>
        </section>
      ) : failed ? (
        <section className="work-area pt-125 pb-130">
          <div className="container">
            <p className="text-center">Portfolio projects could not be loaded.</p>
          </div>
        </section>
      ) : (
        <SitePortfolioTemplate projects={projects} />
      )}
    </Layout>
  );
};

export default Portfolio;
