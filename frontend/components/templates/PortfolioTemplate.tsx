import SectionHeading from "@components/atoms/SectionHeading";
import WorkSample from "@components/organisms/WorkSample";
import styles from "./PortfolioTemplate.module.css";

export type PortfolioSample = {
  id: string;
  context: string;
  detail: string;
};

type PortfolioTemplateProps = {
  samples: PortfolioSample[];
};

export default function PortfolioTemplate({ samples }: PortfolioTemplateProps) {
  return (
    <div className={`page ${styles.page}`}>
      <SectionHeading>Portfolio</SectionHeading>
      <p className={styles.lede}>
        Outcomes taken from the six roles. There is no separate case-study list, and client screenshots are not treated as employers.
      </p>
      <div className={styles.grid}>
        {samples.map((sample) => (
          <WorkSample key={sample.id} context={sample.context} detail={sample.detail} />
        ))}
      </div>
    </div>
  );
}
