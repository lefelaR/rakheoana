import { useEffect, useState } from "react";
import Layout from "@components/layouts/frontendLayout";
import SiteStackTemplate from "@components/templates/SiteStackTemplate";
import type { SkillGroupRecord } from "@services/skillsService";
import { getSkills } from "@services/skillsService";

const selectedGroups = (groups: SkillGroupRecord[]) =>
  groups
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) => skill.selected),
    }))
    .filter((group) => group.skills.length > 0);

const TechStack = () => {
  const [groups, setGroups] = useState<SkillGroupRecord[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    getSkills()
      .then((records) => {
        if (active) {
          setGroups(records);
        }
      })
      .catch(() => {
        if (active) {
          setFailed(true);
          setGroups([]);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <Layout>
      {groups === null ? (
        <section className="services-area gray-bg pt-125 pb-130">
          <div className="container">
            <p className="text-center">Loading tech stack.</p>
          </div>
        </section>
      ) : failed ? (
        <section className="services-area gray-bg pt-125 pb-130">
          <div className="container">
            <p className="text-center">The tech stack could not be loaded.</p>
          </div>
        </section>
      ) : (
        <SiteStackTemplate groups={selectedGroups(groups)} />
      )}
    </Layout>
  );
};

export default TechStack;
