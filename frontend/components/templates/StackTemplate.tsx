import EducationBlock from "@components/organisms/EducationBlock";
import SectionHeading from "@components/atoms/SectionHeading";
import SkillGroup from "@components/organisms/SkillGroup";
import type { Education, SkillGroup as SkillGroupModel } from "@models/profile";
import styles from "./StackTemplate.module.css";

type StackTemplateProps = {
  groups: SkillGroupModel[];
  education: Education;
};

export default function StackTemplate({ groups, education }: StackTemplateProps) {
  return (
    <div className={`page ${styles.page}`}>
      <SectionHeading>Stack</SectionHeading>
      <div>
        {groups.map((group) => (
          <SkillGroup key={group.name} group={group} />
        ))}
      </div>
      <section className={styles.education}>
        <SectionHeading>Education</SectionHeading>
        <EducationBlock education={education} />
      </section>
    </div>
  );
}
