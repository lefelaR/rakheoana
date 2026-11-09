import HomeTemplate from "@components/templates/HomeTemplate";
import type { Education, ExperienceRole, Profile } from "@models/profile";
import { getEducation, getExperience, getProfile } from "@services/profileService";
import type { GetStaticProps } from "next";
import Head from "next/head";

type HomePageProps = {
  profile: Profile;
  latestRole: ExperienceRole;
  education: Education;
};

export default function HomePage({ profile, latestRole, education }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{`${profile.name} · ${profile.title}`}</title>
      </Head>
      <HomeTemplate profile={profile} latestRole={latestRole} education={education} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const [profile, roles, education] = await Promise.all([getProfile(), getExperience(), getEducation()]);
  return {
    props: {
      profile,
      latestRole: roles[0],
      education,
    },
  };
};
