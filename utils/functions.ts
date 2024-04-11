export function formatDate(date: Date): string {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Array of suffixes for days
  const suffixes = ["th", "st", "nd", "rd"];
  const suffix = suffixes[(day - 1) % 10] || suffixes[0];

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${day}${suffix} ${months[monthIndex]} ${year}`;
}

export function formatDayOfWeek(date: Date): string {
  // Array of abbreviated day names
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return daysOfWeek[date.getDay()];
}
