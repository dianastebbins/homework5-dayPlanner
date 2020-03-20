

// hour comes back as 24-hour clock, which is perfect
var timeNow = moment();
var lastTrackedHour = timeNow.hour();

function refreshPage() {
    // set the colors for the hour blocks, based on lastTrackedHour
    if(true){
        $("#18").addClass("future");
    }

    // populate the daily tasks
}

function setTime() {
    var timerInterval = setInterval(function () {
        // get and show the current date and time
        var rightNow = moment();
        var rightNowFormatted = rightNow.format("dddd, MMMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(rightNowFormatted);
                
        // update the page if we passed over into a new hour
        if(rightNow.isSame(lastTrackedHour, 'hour')){
            lastTrackedHour = rightNow.hour();
            refreshPage();
        } // else do nothing
        
        // there is no clearInterval explicitly called since we are always updating the time display
        // per documentation, the timer should die on its own when the window is closed
        
    }, 1000);
}

setTime();
refreshPage();