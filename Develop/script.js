$(document).ready(function() {
    
$('.saveBtn').on('click', function (){
    console.log("click button")
    var textValue = $(this).siblings('.description').val();
    var textTime = $(this).parent().attr('id');
    console.log(textValue);
    console.log(textTime);
})

})

//Use moment to put the time on the page
var today = moment ();
$("currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);

//Moment reacts with the elements in column 1 to determine what color the column should be based on the time of day
//Colors of the columns (styling) change based on what time of day it is
//When a user enters a line of text in the box, it can be saved to LocalStorage by using the save button