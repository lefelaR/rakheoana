import type { PortfolioProject } from "@services/portfolioService";

type PortfolioProjectCardProps = {
  project: PortfolioProject;
};

const PortfolioProjectCard = ({ project }: PortfolioProjectCardProps) => {
  return (
    <div className="single-work text-center mt-30">
      <div className="work-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="work-fallback">
            <h3 className="work-title">{project.title}</h3>
            {project.credit ? <p>{project.credit}</p> : null}
          </div>
        )}
      </div>
      <div className="work-overlay">
        <div className="work-content">
          <h3 className="work-title">{project.title}</h3>
          {project.credit ? <p className="text-white">{project.credit}</p> : null}
          <ul>
            {project.image ? (
              <li>
                <a className="image-popup" href={project.image}>
                  <i className="lni lni-plus"></i>
                  <span className="visually-hidden">View {project.title}</span>
                </a>
              </li>
            ) : null}
            {project.url ? (
              <li>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <i className="lni lni-link"></i>
                  <span className="visually-hidden">Open {project.title}</span>
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjectCard;
