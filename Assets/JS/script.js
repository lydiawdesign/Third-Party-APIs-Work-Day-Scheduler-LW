// to display the current date at the top of the page in the jumbotron
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
