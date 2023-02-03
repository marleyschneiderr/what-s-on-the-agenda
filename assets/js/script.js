// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//displaying today's date at the top of the page that updates everyday 
var date = dayjs().format('YYYY-MM-DD');
$("#currentDay").text("Today is: " + date);


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  $(".saveBtn").on("click", function(event){
  event.preventDefault();
    var timeCalendar = $(this).siblings(".description").val();
    var textCalendar = $(this).parent().attr("id");


// storing time-block information for each hour in local storage 
localStorage.setItem(textCalendar, timeCalendar);

});
});

// Add code to apply the past, present, or future class to each time block by comparing the id to the current hour
// getting the data from the local storage by hour and making it show up on the actual calendar
for(var i = 0; i < 24; i++) {
  var id = "#" + i;
    var textCalendar = $(id).children(".description").val();
    var date = dayjs().format('YYYY-MM-DD');
    var key = date + "-" + i;
    var savedValue = localStorage.getItem(key);
    
    if (savedValue) {
      $(id).children(".description").val(savedValue);
    }
  };

  // var currentHour = parseInt(hour);
  // for (var i = 5; i <= 24; i++) {
   // if ( currentHour < i ) {
   //   $(i+"#-hour").addClass('future'); 
   // } else if ( currentHour === i ) {
   //   $(i+"#-hour").addClass('present');
   // } else {
   //   $(i+"#-hour").addClass('past');
   // };
  // }

   // var currentHour = "10"
   // console.log("current hour is: " + currentHour)
   // if (this.id < currentHour) {
   // i+"#-hour".parent().addClass("past");
   // } else if (this.id > currentHour) {
   // i+"#-hour".parent().addClass("future");
   // } else if (this.id === currentHour) {
    // i+"#-hour".parent().addClass("present");
   // };

   function hourUpdater() {
    // getting the number of hours
    var currentHour = dayjs().hour();
    console.log(currentHour);

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[0]);
      console.log(blockHour);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
      } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
      }
    });
  }
 
    hourUpdater();
      

// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements
$("#1-hour .description").val(localStorage.getItem("1-hour"));
$("#2-hour .description").val(localStorage.getItem("2-hour"));
$("#3-hour .description").val(localStorage.getItem("3-hour"));
$("#4-hour .description").val(localStorage.getItem("4-hour"));
$("#5-hour .description").val(localStorage.getItem("5-hour"));
$("#6-hour .description").val(localStorage.getItem("6-hour"));
$("#7-hour .description").val(localStorage.getItem("7-hour"));
$("#8-hour .description").val(localStorage.getItem("8-hour"));
$("#9-hour .description").val(localStorage.getItem("9-hour"));
$("#10-hour .description").val(localStorage.getItem("10-hour"));
$("#11-hour .description").val(localStorage.getItem("11-hour"));
$("#12-hour .description").val(localStorage.getItem("12-hour"));
$("#13-hour .description").val(localStorage.getItem("13-hour"));
$("#14-hour .description").val(localStorage.getItem("14-hour"));
$("#15-hour .description").val(localStorage.getItem("15-hour"));
$("#16-hour .description").val(localStorage.getItem("16-hour"));
$("#17-hour .description").val(localStorage.getItem("17-hour"));
$("#18-hour .description").val(localStorage.getItem("18-hour"));
$("#19-hour .description").val(localStorage.getItem("19-hour"));
$("#20-hour .description").val(localStorage.getItem("20-hour"));
$("#21-hour .description").val(localStorage.getItem("21-hour"));
$("#22-hour .description").val(localStorage.getItem("22-hour"));
$("#23-hour .description").val(localStorage.getItem("23-hour"));
$("#24-hour .description").val(localStorage.getItem("24-hour"));

// });

