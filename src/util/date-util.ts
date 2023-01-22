function yyyymmdd(date: Date) {
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString().padStart(2, "0")
  const dd = date.getDate().toString().padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}

console.log(yyyymmdd(new Date()))
