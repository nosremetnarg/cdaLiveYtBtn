// GET ELEMENT(S) TO ADJUST
const watchLive = document.getElementById(watchLive);
console.log(watchLive);

/* CREATE NEW DATE OBJECT TO FIND WHAT DAY OF THE WEEK IT IS */
const date = new Date()

/* GET DAY OF THE WEEK */
const dayOfWeek = date.getDay()
console.log(dayOfWeek + ' day of the week')

// CHECK IF ITS SUNDAY
function checkForSunday(date) {
  if (date === 6) {
    console.log('Its Sunday')
    checkTimeOfDay(hour)
  } else {
    console.log('Its not Sunday')
  }
}
checkForSunday(dayOfWeek)


// Convert Timezone
// ET -5 UTC
const utc_offset = date.getTimezoneOffset()
date.setMinutes(date.getMinutes() + utc_offset)

// Offsetting timezone from UTC
let newYork_offset = -5 * 60
date.setMinutes(date.getMinutes() + newYork_offset)

// This gets the time in EST
let hour = date.getHours();
console.log(hour + ' hour');

// CHECK THE TIME OF DAY
function checkTimeOfDay(time) {
  if (time >= 9 && time <= 12) {
    console.log(' It"s Live Stream Time ');
    // IF WITHIN THE TIME WINDOW CHANGE THE URL
    updateURL();
  } else {
    console.log('Not livestream time');
    // IF OUT OF THE TIMEZONE RESET THE URL
    resetURL();
  }
}

function updateURL() {
  watchLive.setAttribute(href, 'https://www.youtube.com/c/LOLUMC')
}
function resetURL() {
  watchLive.setAttribute(href, 'https://lolumc.org/media/')
}