// hour comes back as 24-hour clock, which is perfect
var timeNow = moment();
var currentHour = parseInt(timeNow.hour());
var calendarTasks = JSON.parse(localStorage.getItem("calendarTaskList")) || [];

function refreshPage(){
    // localStorage.removeItem("calendarTasks"); // for testing purposes, when I need to start over...
    refreshDailyTasks();
    refreshColors();
}

// display any persisted tasks stored
function refreshDailyTasks(){
    for (let i = 0; i < calendarTasks.length; i++) {
        calendarEntry = calendarTasks[i];
        var entryId = "#" + calendarEntry.id;
        var entryTasks = calendarEntry.tasks;

        // put the tasks into the textarea with matching id
        // console.log(entryId + " - " + entryTasks);
        $(entryId).text(entryTasks);
    }
}

// update the colors on the page as related to the time of day
function refreshColors() {
    // set the colors for the hour blocks, based on currentHour
    var dailyBlocks = $("textarea");
    dailyBlocks.each(function(index){
        // use the id on each textarea of a dailyBlock
        idOfEl = parseInt($(this).attr("id"));

        // clear out any potentially old colors
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
        
        // set new colors based on time
        if(idOfEl < currentHour){
            $(this).addClass("past");
        } else if(idOfEl === currentHour){
            $(this).addClass("present");
        } else if(idOfEl > currentHour) {
            $(this).addClass("future");
        }
    });
}

// get and set the date and time as well as manage the look of the page based on time
function setTime() {
    var timerInterval = setInterval(function () {
        // get and show the current date and time
        var rightNow = moment();
        $("#currentDay").text(rightNow.format("dddd, MMMM Do YYYY, h:mm:ss a"));
                
        // update the page if we passed over into a new hour
        if(!rightNow.isSame(currentHour, 'hour')){
            currentHour = parseInt(rightNow.hour());
            refreshColors();
        } // else do nothing
        
        // there is no clearInterval explicitly called since we are always updating the time display
        // per documentation, the timer should die on its own when the window is closed
        
    }, 1000);
}

// when user clicks a Save button...
$(".saveBtn").on("click", function(){
    // get the id of this button and use it to find the ID of its corresponding textarea element
    var idOfBtn = $(this).attr("id");
    var idOfTextEl = (idOfBtn.split("-"))[1];
    
    // now get the value in the textarea element and turn it into an object to persist
    var textareaEl = $( "#" + idOfTextEl);
    var taskText = textareaEl.val();
    var taskObj = {
        id: idOfTextEl,
        tasks: taskText
    }
    
    // find any old entries in the main array for this hour/id
    var elementToReplace = -1;
    for (let i = 0; i < calendarTasks.length; i++) {
        calendarEntry = calendarTasks[i];
        var existingId = calendarEntry.id;

        if(existingId === idOfTextEl){
            elementToReplace = i;
        }
    }
    
    if(elementToReplace > -1){
        // replace an existing item with this new item
        calendarTasks.splice(elementToReplace, 1, taskObj);
    } else {
        // first entry for this time slot, just add it to array
        calendarTasks.push(taskObj);
    }
        
    // ...and persist the whole thing to local storage
    localStorage.setItem("calendarTaskList",JSON.stringify(calendarTasks));
});

setTime();
refreshPage();