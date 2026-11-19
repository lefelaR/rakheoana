import { useEffect, useState } from "react";
import Layout from "@components/layouts/frontendLayout";
import SiteExperienceTemplate from "@components/templates/SiteExperienceTemplate";
import { getExperience, type ExperienceRole } from "@services/experienceService";

const Experience = () => {
  const [roles, setRoles] = useState<ExperienceRole[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    getExperience()
      .then((records) => {
        if (active) {
          setFailed(false);
          setRoles(records);
        }
      })
      .catch(() => {
        if (active) {
          setFailed(true);
          setRoles([]);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <Layout>
      {roles === null ? (
        <section className="pricing-area pt-125 pb-130 my-5">
          <div className="container">
            <p className="text-center">Loading experience.</p>
          </div>
        </section>
      ) : failed ? (
        <section className="pricing-area pt-125 pb-130 my-5">
          <div className="container">
            <p className="text-center">Work experience could not be loaded.</p>
          </div>
        </section>
      ) : (
        <SiteExperienceTemplate roles={roles} />
      )}
    </Layout>
  );
};

export default Experience;
