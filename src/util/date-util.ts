function yyyymmdd(date: Date = new Date()): string {
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString().padStart(2, "0")
  const dd = date.getDate().toString().padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}

function yesterday(date: Date = new Date()): Date {
  date.setDate(date.getDate() - 1)
  return date
}

console.log(yyyymmdd())
console.log(yyyymmdd(yesterday()))
