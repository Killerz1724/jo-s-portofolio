interface convertMonthDurationProps {
  start: string;
  end: string;
}

export const convertMonthDuration = ({
  start,
  end,
}: convertMonthDurationProps) => {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const splitStart = start.split(" ");
  const splitEnd = end.split(" ");

  const monthStart =
    months.findIndex((val) => val === splitStart[0].toLowerCase()) + 1;
  const monthEnd =
    months.findIndex((val) => val === splitEnd[0].toLowerCase()) + 1;

  const yearStart = Number(splitStart[1].toLowerCase());
  const yearEnd = splitEnd[1] && Number(splitEnd[1].toLowerCase());

  const monthNow = new Date().getMonth();
  const yearNow = new Date().getFullYear();
  const durMont =
    monthEnd === -1 ? monthNow - monthStart : monthEnd - monthStart;
  const durYear = yearEnd ? yearEnd - yearStart : yearNow - yearStart;

  return { month: durMont > 0 ? durMont : durMont * -1, year: durYear };
};
