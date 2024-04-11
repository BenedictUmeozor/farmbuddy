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

export interface TimeInfo {
  timeString: string;
  period: string; 
}

export function getTimeInfo(date: Date): TimeInfo {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
  let period = "";
  if (hours < 12) {
    period = "Morning";
  } else if (hours >= 12 && hours < 18) {
    period = "Afternoon";
  } else {
    period = "Evening";
  }
  return { timeString, period };
}
