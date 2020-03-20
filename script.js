

var timeNow = moment();

// moment('2010-10-20').isSame('2010-10-20'); // true
// moment('2010-10-20').isSame('2009-12-31', 'year');  // false
function refreshPage() {

}
// textarea will need past/present/future
// row will need past/present/future, right ends are curved so they don't show behind button

function setTime() {
    var timerInterval = setInterval(function () {
        // show the current date and time
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

        // there is no clearInterval explicitly called since we are always updating the time display
        // per documentation, the timer should die on its own when the window is closed

        

    }, 1000);
}

// will we ever call this???
function endTime() {
    clearInterval(timerInterval);
}

setTime();