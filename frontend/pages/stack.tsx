import StackTemplate from "@components/templates/StackTemplate";
import type { Education, SkillGroup } from "@models/profile";
import { getEducation, getSkills } from "@services/profileService";
import type { GetStaticProps } from "next";
import Head from "next/head";

type StackPageProps = {
  groups: SkillGroup[];
  education: Education;
};

export default function StackPage({ groups, education }: StackPageProps) {
  return (
    <>
      <Head>
        <title>Stack · Rakheoana Lefela</title>
      </Head>
      <StackTemplate groups={groups} education={education} />
    </>
  );
}

export const getStaticProps: GetStaticProps<StackPageProps> = async () => {
  const [groups, education] = await Promise.all([getSkills(), getEducation()]);
  return { props: { groups, education } };
};
