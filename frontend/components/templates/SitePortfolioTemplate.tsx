import PortfolioProjectCard from "@components/molecules/PortfolioProjectCard";
import { portfolioPeriods, type PortfolioProject } from "@services/portfolioService";

type SitePortfolioTemplateProps = {
  projects: PortfolioProject[];
};

const SitePortfolioTemplate = ({ projects }: SitePortfolioTemplateProps) => {
  return (
    <section id="work" className="work-area pt-125 pb-130">
      <div className="container">
        {portfolioPeriods.map((period) => {
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
                      <PortfolioProjectCard project={project} />
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SitePortfolioTemplate;
