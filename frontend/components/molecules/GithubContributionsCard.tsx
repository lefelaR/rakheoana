import Icon from "@components/atoms/Icon";
import type { GithubContributionDay } from "@services/githubContributionsService";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
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

const POPOVER_GAP = 10;

const useClientLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

const contributionLabel = (count: number) =>
  count === 0 ? "No contributions" : `${count} contribution${count === 1 ? "" : "s"}`;

const formatDay = (isoDate: string) =>
  new Intl.DateTimeFormat("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${isoDate}T00:00:00`));

const daySummary = (day: GithubContributionDay) =>
  `${contributionLabel(day.count)} on ${formatDay(day.date)}`;

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

type ContributionPopover = {
  day: GithubContributionDay;
  top: number;
  left: number;
  placement: "top" | "bottom";
  arrowShift: number;
};

const fixedHeaderBottom = () => {
  const headers = document.querySelectorAll(".fixed-top");
  let bottom = 0;
  headers.forEach((header) => {
    bottom = Math.max(bottom, header.getBoundingClientRect().bottom);
  });
  return bottom;
};

const measurePopover = (
  element: HTMLElement,
  day: GithubContributionDay,
  scrollElement: HTMLElement | null,
  popoverElement: HTMLElement | null
): ContributionPopover | null => {
  const rect = element.getBoundingClientRect();
  const bounds = scrollElement?.getBoundingClientRect();
  const headerBottom = fixedHeaderBottom();

  if (
    rect.bottom <= headerBottom + 1 ||
    (bounds &&
      (rect.right <= bounds.left + 1 ||
        rect.left >= bounds.right - 1 ||
        rect.bottom <= bounds.top + 1 ||
        rect.top >= bounds.bottom - 1))
  ) {
    return null;
  }

  const popoverHeight = popoverElement?.offsetHeight ?? 58;
  const popoverWidth = popoverElement?.offsetWidth ?? 148;
  const center = rect.left + rect.width / 2;
  const half = popoverWidth / 2;
  const left = Math.round(
    Math.min(window.innerWidth - half - 8, Math.max(half + 8, center))
  );
  const placeAbove = rect.top - popoverHeight - POPOVER_GAP >= headerBottom + 4;
  const maxShift = Math.max(0, half - 14);

  return {
    day,
    top: Math.round(placeAbove ? rect.top - POPOVER_GAP : rect.bottom + POPOVER_GAP),
    left,
    placement: placeAbove ? "top" : "bottom",
    arrowShift: Math.round(Math.min(maxShift, Math.max(-maxShift, center - left))),
  };
};

const samePopover = (current: ContributionPopover | null, next: ContributionPopover | null) =>
  current === next ||
  (current !== null &&
    next !== null &&
    current.day.date === next.day.date &&
    current.top === next.top &&
    current.left === next.left &&
    current.placement === next.placement &&
    current.arrowShift === next.arrowShift);

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
  const [popover, setPopover] = useState<ContributionPopover | null>(null);
  const activeCellRef = useRef<HTMLButtonElement | null>(null);
  const activeDayRef = useRef<GithubContributionDay | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const daysRef = useRef(days);
  daysRef.current = days;
  const tabDate = popover?.day.date ?? days?.[0]?.date;

  const publish = (element: HTMLButtonElement, day: GithubContributionDay) => {
    activeCellRef.current = element;
    activeDayRef.current = day;
    const next = measurePopover(element, day, scrollRef.current, popoverRef.current);
    setPopover((current) => (samePopover(current, next) ? current : next));
  };

  const hidePopover = () => {
    activeCellRef.current = null;
    activeDayRef.current = null;
    setPopover(null);
  };

  const onDayMouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
    const next = event.relatedTarget;
    if (next instanceof Element && next.closest("button[data-date]")) {
      return;
    }

    const focused = document.activeElement;
    if (
      focused instanceof HTMLButtonElement &&
      focused !== event.currentTarget &&
      scrollRef.current?.contains(focused)
    ) {
      const day = daysRef.current?.find((item) => item.date === focused.dataset.date);
      if (day) {
        publish(focused, day);
        return;
      }
    }

    if (document.activeElement !== event.currentTarget) {
      hidePopover();
    }
  };

  const onDayBlur = (event: FocusEvent<HTMLButtonElement>) => {
    const next = event.relatedTarget;
    if (next instanceof HTMLButtonElement && scrollRef.current?.contains(next)) {
      return;
    }

    hidePopover();
  };

  useClientLayoutEffect(() => {
    const element = activeCellRef.current;
    if (!popover || !element) {
      return;
    }

    const next = measurePopover(element, popover.day, scrollRef.current, popoverRef.current);
    if (!samePopover(popover, next)) {
      if (!next) {
        activeCellRef.current = null;
        activeDayRef.current = null;
      }
      setPopover(next);
    }
  }, [popover]);

  const popoverOpen = popover !== null;

  useEffect(() => {
    if (!popoverOpen) {
      return;
    }

    const update = () => {
      const element = activeCellRef.current;
      const day = activeDayRef.current;
      if (!element || !day) {
        return;
      }

      const next = measurePopover(element, day, scrollRef.current, popoverRef.current);
      if (!next) {
        activeCellRef.current = null;
        activeDayRef.current = null;
        setPopover(null);
        return;
      }

      setPopover((current) => (samePopover(current, next) ? current : next));
    };

    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [popoverOpen]);

  const moveFocus = (day: GithubContributionDay, key: string) => {
    if (!days) {
      return;
    }

    const weekday = new Date(`${day.date}T00:00:00`).getDay();
    const delta =
      key === "ArrowUp" && weekday > 0
        ? -1
        : key === "ArrowDown" && weekday < 6
          ? 1
          : key === "ArrowLeft"
            ? -7
            : key === "ArrowRight"
              ? 7
              : 0;

    if (delta === 0) {
      return;
    }

    const index = days.findIndex((item) => item.date === day.date);
    const next = days[index + delta];
    const button = next
      ? scrollRef.current?.querySelector<HTMLButtonElement>(`[data-date="${next.date}"]`)
      : null;

    if (!button || !next) {
      return;
    }

    button.focus();
    publish(button, next);
  };

  const onDayKeyDown = (event: KeyboardEvent<HTMLButtonElement>, day: GithubContributionDay) => {
    if (event.key === "Escape") {
      event.currentTarget.blur();
      hidePopover();
      return;
    }

    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    moveFocus(day, event.key);
  };

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
          <div className={styles.scroll} ref={scrollRef}>
            <div
              className={styles.calendar}
              role="group"
              aria-label="Contribution days. Use arrow keys to move between days."
              style={{
                gridTemplateColumns: `2.25rem repeat(${weeks.length}, minmax(0, 1fr))`,
              }}
            >
              {monthLabels(weeks).map((month, index) => (
                <span
                  key={month.key}
                  className={styles.month}
                  aria-hidden="true"
                  style={{ gridColumn: index + 2, gridRow: 1 }}
                >
                  {month.label}
                </span>
              ))}
              {DAY_LABELS.map((label, index) => (
                <span
                  key={`${label}-${index}`}
                  className={styles.dayLabel}
                  aria-hidden="true"
                  style={{ gridColumn: 1, gridRow: index + 2 }}
                >
                  {label}
                </span>
              ))}
              {weeks.map((week, weekIndex) =>
                week.map((day, dayIndex) =>
                  day ? (
                    <button
                      key={day.date}
                      type="button"
                      className={`${styles.cell} ${styles.block}`}
                      data-level={day.level}
                      data-date={day.date}
                      data-active={popover?.day.date === day.date ? "true" : undefined}
                      aria-label={daySummary(day)}
                      tabIndex={day.date === tabDate ? 0 : -1}
                      style={{ gridColumn: weekIndex + 2, gridRow: dayIndex + 2 }}
                      onMouseEnter={(event) => publish(event.currentTarget, day)}
                      onMouseLeave={onDayMouseLeave}
                      onFocus={(event) => publish(event.currentTarget, day)}
                      onBlur={onDayBlur}
                      onKeyDown={(event) => onDayKeyDown(event, day)}
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
      {popover && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={popoverRef}
              className={styles.popover}
              role="tooltip"
              data-placement={popover.placement}
              style={{
                top: popover.top,
                left: popover.left,
                ["--arrow-shift" as string]: `${popover.arrowShift}px`,
              }}
            >
              <div className={styles.popoverDate}>{formatDay(popover.day.date)}</div>
              <div className={styles.popoverCount}>{contributionLabel(popover.day.count)}</div>
            </div>,
            document.body
          )
        : null}
    </article>
  );
};

export default GithubContributionsCard;
