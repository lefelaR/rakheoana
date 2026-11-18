import { useEffect, useState } from "react";
import Layout from "@components/layouts/frontendLayout";
import SiteStackTemplate from "@components/templates/SiteStackTemplate";
import { getSkills, selectedSkillGroups } from "@services/skillsService";

const TechStack = () => {
  const [groups, setGroups] = useState<ReturnType<typeof selectedSkillGroups> | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    const load = () => {
      getSkills()
        .then((records) => {
          if (active) {
            setFailed(false);
            setGroups(selectedSkillGroups(records));
          }
        })
        .catch(() => {
          if (active) {
            setFailed(true);
            setGroups([]);
          }
        });
    };

    load();

    const onVisible = () => {
      if (document.visibilityState === "visible") {
        load();
      }
    };

    document.addEventListener("visibilitychange", onVisible);

    return () => {
      active = false;
      document.removeEventListener("visibilitychange", onVisible);
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
        <SiteStackTemplate groups={groups} />
      )}
    </Layout>
  );
};

export default TechStack;
