import { useEffect, useState } from "react";
import Layout from "@components/layouts/frontendLayout";
import SitePortfolioTemplate from "@components/templates/SitePortfolioTemplate";
import {
  getGithubContributions,
  githubProfile,
  type GithubContributions,
} from "@services/githubContributionsService";
import { getPortfolio, type PortfolioProject } from "@services/portfolioService";

const Portfolio = () => {
  const [projects, setProjects] = useState<PortfolioProject[] | null>(null);
  const [projectsFailed, setProjectsFailed] = useState(false);
  const [contributions, setContributions] = useState<GithubContributions | null>(null);
  const [contributionsFailed, setContributionsFailed] = useState(false);

  useEffect(() => {
    let active = true;

    getPortfolio()
      .then((records) => {
        if (active) {
          setProjectsFailed(false);
          setProjects(records);
        }
      })
      .catch(() => {
        if (active) {
          setProjectsFailed(true);
          setProjects([]);
        }
      });

    getGithubContributions()
      .then((record) => {
        if (active) {
          setContributionsFailed(false);
          setContributions(record);
        }
      })
      .catch(() => {
        if (active) {
          setContributionsFailed(true);
          setContributions(null);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <Layout>
      <SitePortfolioTemplate
        projects={projects}
        projectsFailed={projectsFailed}
        contributions={{
          username: githubProfile.username,
          profileUrl: githubProfile.url,
          total: contributions?.totalLastYear ?? null,
          days: contributions?.days ?? null,
          failed: contributionsFailed,
        }}
      />
    </Layout>
  );
};

export default Portfolio;
