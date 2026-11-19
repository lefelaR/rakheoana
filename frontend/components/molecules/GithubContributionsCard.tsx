import Icon from "@components/atoms/Icon";
import type { GithubContributionDay } from "@services/githubContributionsService";
import { FaGithub } from "react-icons/fa6";
import styles from "./GithubContributionsCard.module.css";

export type GithubContributionsCardProps = {
  username: string;
  profileUrl: string;
  total: number | null;
  days: GithubContributionDay[] | null;
  failed?: boolean;
};

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

const contributionLabel = (count: number) =>
  `${count} contribution${count === 1 ? "" : "s"}`;

const formatDay = (isoDate: string) =>
  new Intl.DateTimeFormat("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${isoDate}T00:00:00`));

const formatMonth = (isoDate: string) =>
  new Intl.DateTimeFormat("en-ZA", { month: "short" }).format(
    new Date(`${isoDate}T00:00:00`)
  );

const groupWeeks = (days: GithubContributionDay[]) => {
  const weeks: (GithubContributionDay | null)[][] = [];
  let week: (GithubContributionDay | null)[] = [];

  days.forEach((day) => {
    const weekday = new Date(`${day.date}T00:00:00`).getDay();
    if (week.length === 0) {
      week = Array.from({ length: weekday }, () => null);
    }
    week.push(day);
    if (weekday === 6) {
      weeks.push(week);
      week = [];
    }
  });

  if (week.length > 0) {
    weeks.push(week);
  }

  return weeks;
};

const monthLabels = (weeks: (GithubContributionDay | null)[][]) => {
  const labels: { key: string; label: string }[] = [];
  let previousMonth = "";
  let previousIndex = -3;

  weeks.forEach((week, index) => {
    const firstDay = week.find((day) => day !== null);
    const label = firstDay ? formatMonth(firstDay.date) : "";
    const showLabel = label !== "" && label !== previousMonth && index - previousIndex >= 3;

    labels.push({
      key: firstDay?.date ?? `week-${index}`,
      label: showLabel ? label : "",
    });

    if (showLabel) {
      previousMonth = label;
      previousIndex = index;
    }
  });

  return labels;
};

const GithubContributionsCard = ({
  username,
  profileUrl,
  total,
  days,
  failed = false,
}: GithubContributionsCardProps) => {
  const weeks = days ? groupWeeks(days) : [];
  const summary =
    failed
      ? "Contributions could not be loaded."
      : total === null
        ? "Loading contributions."
        : `${contributionLabel(total)} in the last year`;

  return (
    <article className={styles.card} aria-busy={total === null && !failed}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>GitHub contributions</h2>
          <p className={styles.summary}>{summary}</p>
        </div>
        <a className={styles.profile} href={profileUrl} target="_blank" rel="noreferrer">
          <Icon icon={FaGithub} size={18} aria-hidden />
          {username}
        </a>
      </header>
      {weeks.length > 0 ? (
        <>
          <div className={styles.scroll}>
            <div
              className={styles.calendar}
              aria-hidden="true"
              style={{
                gridTemplateColumns: `2.25rem repeat(${weeks.length}, minmax(0, 1fr))`,
              }}
            >
              {monthLabels(weeks).map((month, index) => (
                <span
                  key={month.key}
                  className={styles.month}
                  style={{ gridColumn: index + 2, gridRow: 1 }}
                >
                  {month.label}
                </span>
              ))}
              {DAY_LABELS.map((label, index) => (
                <span
                  key={`${label}-${index}`}
                  className={styles.dayLabel}
                  style={{ gridColumn: 1, gridRow: index + 2 }}
                >
                  {label}
                </span>
              ))}
              {weeks.map((week, weekIndex) =>
                week.map((day, dayIndex) =>
                  day ? (
                    <div
                      key={day.date}
                      className={`${styles.cell} ${styles.block}`}
                      data-level={day.level}
                      title={`${contributionLabel(day.count)} on ${formatDay(day.date)}`}
                      style={{ gridColumn: weekIndex + 2, gridRow: dayIndex + 2 }}
                    />
                  ) : (
                    <div
                      key={`pad-${weekIndex}-${dayIndex}`}
                      className={styles.pad}
                      style={{ gridColumn: weekIndex + 2, gridRow: dayIndex + 2 }}
                    />
                  )
                )
              )}
            </div>
          </div>
          <div className={styles.legend} aria-hidden="true">
            <span>Less</span>
            <span className={`${styles.cell} ${styles.swatch}`} data-level={0} />
            <span className={`${styles.cell} ${styles.swatch}`} data-level={1} />
            <span className={`${styles.cell} ${styles.swatch}`} data-level={2} />
            <span className={`${styles.cell} ${styles.swatch}`} data-level={3} />
            <span className={`${styles.cell} ${styles.swatch}`} data-level={4} />
            <span>More</span>
          </div>
        </>
      ) : null}
    </article>
  );
};

export default GithubContributionsCard;
