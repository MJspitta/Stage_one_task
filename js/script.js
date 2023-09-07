const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const myDate = new Date();
let day = weekday[myDate.getDay()];
let hours = myDate.getUTCHours();
let mins = myDate.getUTCMinutes();
let secs = myDate.getUTCSeconds();
let millisecs = myDate.getUTCMilliseconds();
let utcDate = hours + ":" + mins + ":" + secs + "." + millisecs;

document.getElementById("currentDayOfTheWeek").innerHTML = "<strong>Day Of The Week: </strong>" + day;
document.getElementById("currentUTCTime").innerHTML = "<strong>UTC Time: </strong>" + utcDate;