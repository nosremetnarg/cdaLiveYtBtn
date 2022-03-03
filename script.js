/* CREATE NEW DATE OBJECT TO FIND WHAT DAY OF THE WEEK IT IS */
const date = new Date()
/* GET DAY OF THE WEEK */
const dayOfWeek = date.getDay()

console.log(dayOfWeek)

// CHECK IF ITS SUNDAY
function checkForSunday(date) {
  if (date === 6) {
    console.log('Its Sunday')
  } else {
    console.log('Its not Sunday')
  }
}
checkForSunday(dayOfWeek)

// UTC-5 is NEW YORK TIME ZONE
const newYork = new Date().toLocaleString('en-US', {
  timeZone: 'America/New_York',
})
const hours = (date.getHours() + 1)
console.log(hours)

function checkHours (time) {
    // checking for 9am-12pm
    if ( hours >= 9 || hours <= 12 ) {
        console.log('need to switch URL');
    } else {
        console.log('do not need to switch URL');
    }
}
checkHours(hours)