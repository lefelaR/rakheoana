export const githubProfile = {
  username: "lefelaR",
  url: "https://github.com/lefelaR",
};

export type GithubContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type GithubContributions = {
  totalLastYear: number;
  days: GithubContributionDay[];
};

const isContributionDay = (value: unknown): value is GithubContributionDay => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const day = value as GithubContributionDay;
  return (
    typeof day.date === "string" &&
    typeof day.count === "number" &&
    typeof day.level === "number" &&
    day.level >= 0 &&
    day.level <= 4
  );
};

export const getGithubContributions = async (): Promise<GithubContributions> => {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${githubProfile.username}?y=last`
  );

  if (!response.ok) {
    throw new Error("GitHub contributions could not be loaded");
  }

  const body = (await response.json()) as {
    total?: { lastYear?: unknown };
    contributions?: unknown;
  };

  if (!Array.isArray(body.contributions) || !body.contributions.every(isContributionDay)) {
    throw new Error("GitHub contributions response was not a calendar");
  }

  const days = [...body.contributions].sort((left, right) =>
    left.date.localeCompare(right.date)
  );
  const totalLastYear =
    typeof body.total?.lastYear === "number"
      ? body.total.lastYear
      : days.reduce((sum, day) => sum + day.count, 0);

  return { totalLastYear, days };
};
