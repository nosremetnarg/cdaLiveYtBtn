/* CREATE NEW DATE OBJECT TO FIND WHAT DAY OF THE WEEK IT IS */
const date = new Date()

/* GET DAY OF THE WEEK */
const dayOfWeek = date.getDay()
console.log(dayOfWeek + ' day of the week')

// CHECK IF ITS SUNDAY
function checkForSunday(date) {
  if (date === 6) {
    console.log('Its Sunday')
    
  } else {
    console.log('Its not Sunday')
  }
}
checkForSunday(dayOfWeek)
const utc_offset = date.getTimezoneOffset()

date.setMinutes(date.getMinutes() + utc_offset)

// Convert Timezone
// ET -5 UTC

// Offsetting timezone from UTC
let newYork_offset = -5 * 60
date.setMinutes(date.getMinutes() + newYork_offset)

// This gets the time in EST
let hour = date.getHours();
console.log(hour + ' hour');

function checkTimeOfDay(time) {
  if (time >= 9 && time <= 12) {
    console.log(' It"s Live Stream Time ');
  } else {
    console.log('Not livestream time');
  }
}
checkTimeOfDay(hour)
