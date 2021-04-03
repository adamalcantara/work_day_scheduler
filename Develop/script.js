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
$("#currentDay").text(today.format("MMM Do, YYYY"));

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
            $(this).addClass("past");
        }
        //add the present class if the block hour is equal to the current hour
        if (blockHour === currentHour) {
            $(this).addClass("present");
        }
        //add the future class if the block hour is more than the current hour
        if (blockHour > currentHour) {
            $(this).addClass("future");
        }
    })
}

//call the currentTime function so that it runs
currentTime();

})