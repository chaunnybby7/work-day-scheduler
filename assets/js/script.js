// The ready() method is used to make a function available after the document is loaded. 
//Whatever code you write inside the $(document ).ready() method will run once the page DOM is ready to execute JavaScript code.
$(document).ready(function () {
// Display current day & time.

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js

//assign saveBtn click eventlistener for user input and time stamp
$(".saveBtn").on("click", function () {
//get nearby values.
console.log(this);
var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

//set items in local storage.
localStorage.setItem(time, text);
    })

//load any saved data from LocalStorage - do this for each hour created. 
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


//get current number of hours.
function hourTracker() {

var currentHour = moment().hour(); // use of moment.js

// loop over time blocks
$(".time-block").each(function () {
var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

//check if we've moved past this time, click into css/html given classes of past, present, or future
if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
 } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker(); //run function again 
})
