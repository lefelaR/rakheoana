import ExperienceRoleCard from "@components/molecules/ExperienceRoleCard";
import type { ExperienceRole } from "@services/experienceService";

type SiteExperienceTemplateProps = {
  roles: ExperienceRole[];
};

const SiteExperienceTemplate = ({ roles }: SiteExperienceTemplateProps) => {
  return (
    <section id="experience" className="pricing-area pt-125 pb-130 my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-5">
              <h2 className="title">Work Experience</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {roles.length === 0 ? (
              <p className="text-center">No roles published yet.</p>
            ) : (
              roles.map((role) => <ExperienceRoleCard key={role.id} role={role} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteExperienceTemplate;
