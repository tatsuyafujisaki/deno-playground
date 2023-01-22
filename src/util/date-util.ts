export function yesterday(date: Date = new Date()): Date {
  date.setDate(date.getDate() - 1)
  return date
}

export function yyyymmdd(date: Date = new Date()): string {
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString().padStart(2, "0")
  const dd = date.getDate().toString().padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}
