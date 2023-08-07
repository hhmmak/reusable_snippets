const MONTHS = [[],["01", "January", "Jan"], ["02", "February", "Feb"], ["03", "March", "Mar"], ["04", "April", "Apr"], ["05", "May", "May"], ["06", "June", "Jun"], ["07", "July", "Jul"], ["08", "August", "Aug"], ["09", "September", "Sep"], ["10", "October", "Oct"], ["11", "November", "Nov"], ["12", "December", "Dec"]]
const DAYS = [["00", "Sunday", "Sun"], ["01", "Monday", "Mon"], ["02", "Tuesday", "Tue"], ["03", "Wednesday", "Wed"], ["04", "Thursday", "Thu"], ["05", "Friday", "Fri"], ["06", "Saturday", "Sat"]]


const twoDigit = (numRaw: string | number) => {
  return ("0" + numRaw).slice(-2);
}

const dateParser = (dateRaw: Date, result: string | null) => {

  const dateObj = {
    year: dateRaw.getFullYear(),
    month: (dateRaw.getMonth() + 1),
    date: dateRaw.getDate(),
    day: dateRaw.getDay(),
    hour: dateRaw.getHours(),
    AM: "AM",
    PM: "PM",
    min: dateRaw.getMinutes(),
    sec: dateRaw.getSeconds(),
    milsec: dateRaw.getMilliseconds(),
  };

  if (result === null){
    return dateObj;
  }

  // parse Year
  result.replaceAll("YYYY", dateObj.year);
  result.replaceAll("YY", twoDigit(dateObj.year));

  // parse Month
  result.replaceALL("MMMM", MONTHS[dateObj.month][1]);
  result.replaceALL("MMM", MONTHS[dateObj.month][2]);
  result.replaceAll("MM", MONTHS[dateObj.month][0]);
  result.replaceAll("M", dateObj.day.toString());

  // parse Date
  result.replaceALL("DD", twoDigit(dateObj.date));
  result.replaceALL("D", dateObj.date.toString());

  // parse day
  result.replaceALL("dddd", DAYS[dateObj.day][1]);
  result.replaceALL("ddd", DAYS[dateObj.day][2]);
  result.replaceALL("dd", DAYS[dateObj.day][0]);

  //TODO time parse

  return result;
};
