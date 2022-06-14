const addDays = require("date-fns/addDays");
function newDate(days) {
  return addDays(new Date(2020, 7, 22), days);
}
console.log(newDate(1));
