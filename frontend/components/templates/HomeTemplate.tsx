import ContactLinks from "@components/molecules/ContactLinks";
import EducationBlock from "@components/organisms/EducationBlock";
import Hero from "@components/organisms/Hero";
import RoleCard from "@components/organisms/RoleCard";
import SectionHeading from "@components/atoms/SectionHeading";
import TargetRoles from "@components/organisms/TargetRoles";
import TextLink from "@components/atoms/TextLink";
import type { Education, ExperienceRole, Profile } from "@models/profile";
import styles from "./HomeTemplate.module.css";

type HomeTemplateProps = {
  profile: Profile;
  latestRole: ExperienceRole;
  education: Education;
};

export default function HomeTemplate({ profile, latestRole, education }: HomeTemplateProps) {
  return (
    <div className={`page ${styles.home}`}>
      <Hero profile={profile} />
      <div className={styles.below}>
        <section className={styles.summary}>
          <p>{profile.summary}</p>
          <p className={styles.meta}>
            {profile.years}. {profile.relocate}.
          </p>
          <ContactLinks contact={profile.contact} />
        </section>
        <TargetRoles profile={profile} />
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <SectionHeading>Latest role</SectionHeading>
            <TextLink href="/experience">All roles</TextLink>
          </div>
          <RoleCard role={latestRole} index={1} />
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <SectionHeading>Education</SectionHeading>
            <TextLink href="/stack">Skills</TextLink>
          </div>
          <EducationBlock education={education} />
        </section>
      </div>
    </div>
  );
}
