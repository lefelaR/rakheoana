import ExperienceRoleCard from "@components/molecules/ExperienceRoleCard";
import LazyLoad from "@components/molecules/LazyLoad";
import type { ExperienceRole } from "@services/experienceService";
import styles from "./SiteExperienceTemplate.module.css";

type SiteExperienceTemplateProps = {
  roles: ExperienceRole[];
};

const SiteExperienceTemplate = ({ roles }: SiteExperienceTemplateProps) => {
  return (
    <section id="experience" className={`pricing-area pt-125 pb-130 my-5 ${styles.section}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-5">
              <h2 className="title">Work Experience</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {roles.length === 0 ? (
              <p className="text-center">No roles published yet.</p>
            ) : (
              roles.map((role, index) =>
                index === 0 ? (
                  <ExperienceRoleCard key={role.id} role={role} />
                ) : (
                  <LazyLoad key={role.id} intrinsicSize="22rem">
                    <ExperienceRoleCard role={role} />
                  </LazyLoad>
                ),
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteExperienceTemplate;
