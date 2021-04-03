$(document).ready(function () {

    $('.saveBtn').on('click', function () {
        console.log("click button")
        var textTime = $(this).siblings('.description').val();
        var textValue = $(this).parent().attr('id');
        console.log(textValue);
        console.log(textTime);

        localStorage.setItem(textValue, textTime);
    })

})

//Use moment to put the time on the page
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//variable to set the time
function currentTime() {
    //set a variable for the current hour so that it can be compared to the rows
    var currentHour = moment().hour();
    console.log(currentHour);

    $(".time-blocks").each(function () {
        var blockHour = ($(this).attr('id'));

        if (blockHour < currentHour) {
            $(this).addClass("past");
        }
        if (blockHour === currentHour) {
            $(this).addClass("present");
        }
        if (blockHour > currentHour) {
            $(this).addClass("future");
        }
    })
}

currentTime();