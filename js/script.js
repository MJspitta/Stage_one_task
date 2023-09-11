function refresh_time() {
    let refresh = 1000;
    mytime = setTimeout("curr_time()", refresh);
}

function curr_time() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const myDate = new Date();
    let day = weekday[myDate.getDay()];
    let hours = myDate.getUTCHours();
    let mins = myDate.getUTCMinutes();
    let secs = myDate.getUTCSeconds();
    let millisecs = myDate.getUTCMilliseconds();
    let utcDate = hours + ":" + mins + ":" + secs + "." + millisecs;

    document.getElementById("currentDayOfTheWeek").innerHTML = day;
    document.getElementById("currentUTCTime").innerHTML = utcDate;

    refresh_time();
}