import SkillGroup, { type Skill } from "@components/organisms/SkillGroup";

export type SiteStackGroup = {
  label: string;
  skills: Skill[];
};

type SiteStackTemplateProps = {
  groups: SiteStackGroup[];
};

const SiteStackTemplate = ({ groups }: SiteStackTemplateProps) => {
  return (
    <section id="techstack" className="services-area gray-bg pt-125 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-30">
              <h2 className="title">Tech Stack</h2>
            </div>
          </div>
        </div>
        {groups.length === 0 ? (
          <p className="text-center">No technologies selected yet.</p>
        ) : (
          groups.map((group) => (
            <SkillGroup key={group.label} label={group.label} skills={group.skills} />
          ))
        )}
      </div>
    </section>
  );
};

export default SiteStackTemplate;
