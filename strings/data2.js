function formatDate(day, month, year) {
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  console.log(`${day}/${month}/${year}`)
}

formatDate(21, 7, 2010);
