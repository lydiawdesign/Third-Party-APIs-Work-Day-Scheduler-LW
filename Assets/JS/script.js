// to display the current date at the top of the page in the jumbotron
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var sevenAM = moment().hour(7);
var eightAM = moment().hour(8);
var nineAM = moment().hour(9);
var tenAM = moment().hour(10);
var elevenAM = moment().hour(11);
var noon = moment().hour(12);
var onePM = moment().hour(13);
var twoPM = moment().hour(14);
var threePM = moment().hour(15);
var fourPM = moment().hour(16);

// (doesn't work) color coding the timeblocks to indicated if the hour is in the past, present, or future. 
function timeblockColors () {
    var timeNow = moment().hours();
    timeNow = parseInt(hour);
    
    // checking if the hour is equal to, less than, or more than 7 AM to determine present, past, future.
    var check7 = document.getAttribute("sevenAM-hour");
    console.log(check7);
    if (timeNow === check7) {
        $("#sevenAM-event").addClass("present");
    } 
    else if (timeNow < check7) {
        $("#sevenAM-event").addClass("past");
    }
    else {
        $("#sevenAM-event").addClass("future");
    };

    // checking if the hour is equal to, less than, or more than 8 AM to determine present, past, future.
    var check8 = document.getAttribute("eightAM-hour");    
    if (timeNow === check8) {
        $("#eightAM-event").addClass("present");
    } 
    else if (timeNow < check8) {
        $("#eightAM-event").addClass("past");
    }
    else {
        $("#eightAM-event").addClass("future");
    };

    // checking if the hour is equal to, less than, or more than 9 AM to determine present, past, future.
    var check9 = document.getAttribute("nineAM-hour");   
    if (timeNow === check9) {
        $("#nineAM-event").addClass("present");
    } 
    else if (timeNow < check9) {
        $("#nineAM-event").addClass("past");
    }
    else {
        $("#nineAM-event").addClass("future");
    };

    // checking if the hour is equal to, less than, or more than 10 AM to determine present, past, future.
    var check10 = document.getAttribute("tenAM-hour");   
    if (timeNow === check10) {
        $("#tenAM-event").addClass("present");
    } 
    else if (timeNow < check10) {
        $("#tenAM-event").addClass("past");
    }
    else {
        $("#tenAM-event").addClass("future");
    };

    // checking if the hour is equal to, less than, or more than 11 AM to determine present, past, future.
    var check11 = document.getAttribute("elevenAM-hour");   
    if (timeNow === check11) {
        $("#elevenAM-event").addClass("present");
    } 
    else if (timeNow < check11) {
        $("#elevenAM-event").addClass("past");
    }
    else {
        $("#elevenAM-event").addClass("future");
    };

    // checking if the hour is equal to, less than, or more than 12 AM to determine present, past, future.
    var check12 = document.getAttribute("noon-hour");    
    if (timeNow === check12) {
        $("#noon-event").addClass("present");
    } 
    else if (timeNow < check12) {
        $("#noon-event").addClass("past");
    }
    else {
        $("#noon-event").addClass("future");
    };

    // checking if the hour is equal to, less than, or more than 1 PM to determine present, past, future.
    var check13 = document.getAttribute("onePM-hour");   
    if (timeNow === check13) {
        $("#onePM-event").addClass("present");
    } 
    else if (timeNow < check13) {
        $("#onePM-event").addClass("past");
    }
    else {
        $("#onePM-event").addClass("future");
    };

    // checking if the hour is equal to, less than, or more than 2 PM to determine present, past, future.
    var check14 = document.getAttribute("twoPM-hour");   
    if (timeNow === check14) {
        $("#noon-event").addClass("present");
    } 
    else if (timeNow < check14) {
        $("#twoPM-event").addClass("past");
    }
    else {
        $("#twoPM-event").addClass("future");
    };

    // checking if the hour is equal to, less than, or more than 3 PM to determine present, past, future.
    var check15 = document.getAttribute("threePM-event");   
    if (timeNow === check15) {
        $("#threePM-event").addClass("present");
    } 
    else if (timeNow < check14) {
        $("#threePM-event").addClass("past");
    }
    else {
        $("#threePM-event").addClass("future");
    };
        
    // checking if the hour is equal to, less than, or more than 4 PM to determine present, past, future.
    var check16 = document.getAttribute("fourPM-event");   
    if (timeNow === check16) {
        $("#fourPM-event").addClass("present");
    } 
    else if (timeNow < check14) {
        $("#fourPM-event").addClass("past");
    }
    else {
        $("#fourPM-event").addClass("future");
    };
};
 
// variables for the store event function 
var saveBtn7 = $('#sevenAMSave');
var saveBtn8 = $('#eightAMSave');
var saveBtn9 = $('#nineAMSave');
var saveBtn10 = $('#tenAMSave');
var saveBtn11 = $('#elevenAMSave');
var saveBtn12 = $('#noonSave');
var saveBtn1 = $('#onePMSave');
var saveBtn2 = $('#twoPMSave');
var saveBtn3 = $('#threePMSave');
var saveBtn4 = $('#fourPMSave');

// saving the event description tothe local storage when the save button is clicked (doesn't work)

saveBtn7.on('click', function () {
    var eventDescription7 = $('#sevenAM-event').val();
    console.log(eventDescription7);
    localStorage.setItem("7AM", eventDescription7);
});
saveBtn8.on('click', function () {
    var eventDescription8 = $('#eightAM-event').val();
    console.log(eventDescription8);
    localStorage.setItem("8AM", eventDescription8);
});
saveBtn9.on('click', function () {
    var eventDescription9 = $('#nineAM-event').val();
    console.log(eventDescription9);
    localStorage.setItem("9AM", eventDescription9);
});
saveBtn10.on('click', function () {
    var eventDescription10 = $('#tenAM-event').val();
    console.log(eventDescription10);
    localStorage.setItem("10AM", eventDescription10);
});
saveBtn11.on('click', function () {
    var eventDescription11 = $('#elevenAM-event').val();
    console.log(eventDescription11);
    localStorage.setItem("11AM", eventDescription11);
});
saveBtn12.on('click', function () {
    var eventDescription12 = $('#noon-event').val();
    console.log(eventDescription12);
    localStorage.setItem("noon", eventDescription12);
});
saveBtn1.on('click', function () {
    var eventDescription1 = $('#onePM-event').val();
    console.log(eventDescription1);
    localStorage.setItem("1PM", eventDescription1);
});
saveBtn2.on('click', function () {
    var eventDescription2 = $('#twoPM-event').val();
    console.log(eventDescription2);
    localStorage.setItem("2PM", eventDescription2);
});
saveBtn3.on('click', function () {
    var eventDescription3 = $('#threePM-event').val();
    console.log(eventDescription3);
    localStorage.setItem("3PM", eventDescription3);
});
saveBtn4.on('click', function () {
    var eventDescription4 = $('#fourPM-event').val();
    console.log(eventDescription4);
    localStorage.setItem("4PM", eventDescription4);
});

// attempting to keep the events when the page is refreshed, need to set and get (doesn't work)
var containerEl = $('#container');

function getStoredData (){
    //set
    localStorage.setItem('.container', JSON.stringify(containerSaved));

    //get
    var constainerSaved = JSON.parse(localStorage.getItem('.container'));
    containerEl = containerSaved.text
    
};

getStoredData ();