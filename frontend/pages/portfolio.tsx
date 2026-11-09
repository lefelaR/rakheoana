import PortfolioTemplate, { type PortfolioSample } from "@components/templates/PortfolioTemplate";
import type { ExperienceRole } from "@models/profile";
import { getExperience } from "@services/profileService";
import type { GetStaticProps } from "next";
import Head from "next/head";

type PortfolioPageProps = {
  samples: PortfolioSample[];
};

function toSamples(roles: ExperienceRole[]): PortfolioSample[] {
  return roles.flatMap((role) =>
    role.bullets.map((detail) => ({
      id: `${role.company}:${detail}`,
      context: `${role.role} · ${role.company}`,
      detail,
    })),
  );
}

export default function PortfolioPage({ samples }: PortfolioPageProps) {
  return (
    <>
      <Head>
        <title>Portfolio · Rakheoana Lefela</title>
      </Head>
      <PortfolioTemplate samples={samples} />
    </>
  );
}

export const getStaticProps: GetStaticProps<PortfolioPageProps> = async () => {
  const roles = await getExperience();
  return { props: { samples: toSamples(roles) } };
};
