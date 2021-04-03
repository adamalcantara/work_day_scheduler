$(document).ready(function () {

    $('.saveBtn').on('click', function () {
        console.log("click button")
        var textTime = $(this).siblings('.description').val();
        var textValue = $(this).parent().attr('id');
        console.log(textValue);
        console.log(textTime);

        //put the items into localStorage
        localStorage.setItem(textValue, textTime);
    })

//Use moment to put the time on the page
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

//variable to set the time
function currentTime() {
    //set a variable for the current hour so that it can be compared to the rows
    var currentHour = moment().hour();
    console.log(currentHour);

    //get variables for each item with a class of "time-blocks"
    $(".time-blocks").each(function () {
        //Get the id attribute of this (this being the rows with the class of time blocks)
        var blockHour = ($(this).attr('id'));

        //add the past class if the block hour is less than the current time
        if (blockHour < currentHour) {
            $(this).children().eq(1).addClass("past");
        }
        //add the present class if the block hour is equal to the current hour
        if (blockHour == currentHour) {
            $(this).children().eq(1).addClass("present");
        }
        //add the future class if the block hour is more than the current hour
        if (blockHour > currentHour) {
            $(this).children().eq(1).addClass("future");
        }
    })
}

//call the currentTime function so that it runs
currentTime();

})

//function to clear the localStorage, and set all the boxes to empty
function clearAll () {
    localStorage.clear();
    $("#09 .description").val("");
    $("#10 .description").val("");
    $("#11 .description").val("");
    $("#12 .description").val("");
    $("#13 .description").val("");
    $("#14 .description").val("");
    $("#15 .description").val("");
    $("#16 .description").val("");
    $("#17 .description").val("");
}

//set the variable for the clear button and get it by the ID
var clearBtn = document.getElementById("clear");
//call the clearAll function on the click of the clearBtn
clearBtn.addEventListener("click", clearAll);

function init() {
//Take all of the items from the localStorage and put them back on the page upon page load
$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
}


init();