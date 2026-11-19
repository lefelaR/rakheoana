import GithubContributionsCard, {
  type GithubContributionsCardProps,
} from "@components/molecules/GithubContributionsCard";
import LazyLoad from "@components/molecules/LazyLoad";
import PortfolioProjectCard from "@components/molecules/PortfolioProjectCard";
import { portfolioPeriods, type PortfolioProject } from "@services/portfolioService";

type SitePortfolioTemplateProps = {
  projects: PortfolioProject[] | null;
  projectsFailed?: boolean;
  contributions: GithubContributionsCardProps;
};

const SitePortfolioTemplate = ({
  projects,
  projectsFailed = false,
  contributions,
}: SitePortfolioTemplateProps) => {
  return (
    <section id="work" className="work-area pt-125 pb-130">
      <div className="container">
        <GithubContributionsCard {...contributions} />
        {projects === null ? (
          <p className="text-center">Loading portfolio.</p>
        ) : projectsFailed ? (
          <p className="text-center">Portfolio projects could not be loaded.</p>
        ) : null}
        {projects && !projectsFailed
          ? portfolioPeriods.map((period) => {
          const items = projects.filter((project) => project.period === period.id);
          return (
            <div key={period.id} className="mb-5">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title text-center pb-30">
                    <h2 className="title h2">{period.label}</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {items.length === 0 ? (
                  <p className="text-center">No projects in this section yet.</p>
                ) : (
                  items.map((project) => (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={project.id}>
                      <LazyLoad intrinsicSize="22rem">
                        <PortfolioProjectCard project={project} />
                      </LazyLoad>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })
          : null}
      </div>
    </section>
  );
};

export default SitePortfolioTemplate;
