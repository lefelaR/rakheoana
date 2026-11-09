import ExperienceTemplate from "@components/templates/ExperienceTemplate";
import type { ExperienceRole } from "@models/profile";
import { getExperience } from "@services/profileService";
import type { GetStaticProps } from "next";
import Head from "next/head";

type ExperiencePageProps = {
  roles: ExperienceRole[];
};

export default function ExperiencePage({ roles }: ExperiencePageProps) {
  return (
    <>
      <Head>
        <title>Experience · Rakheoana Lefela</title>
      </Head>
      <ExperienceTemplate roles={roles} />
    </>
  );
}

export const getStaticProps: GetStaticProps<ExperiencePageProps> = async () => {
  const roles = await getExperience();
  return { props: { roles } };
};
