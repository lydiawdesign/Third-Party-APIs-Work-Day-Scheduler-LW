# Third-Party-APIs-Work-Day-Scheduler-LW

Final Link to Project: https://lydiawdesign.github.io/Third-Party-APIs-Work-Day-Scheduler-LW/
repo link: https://github.com/lydiawdesign/Third-Party-APIs-Work-Day-Scheduler-LW

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar

- I used a moment.js function in the javascript to add the current date in the jumbotron


WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

- I used bootstrap input groups to input the timeblocks into the hmtl 


WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

- tried doing with the timeblockColors function (doesn't work). The idea was that there is a variale that would get the attribute of the hour attribute (data-hour), then log it in the console, and check if that number is equal to the current time, past the current time, or less than the current time. Based on the results then it would add the style classes listed in css. 

- then I went back and tried a new logic. I tried used moment.js to define the timeNow. then I wanted to get the time from the timeblocks and parse it. Then check what the outcome of that is to the current time and based on if it's equal to, less than, or more than, add and remove the neccessary class (future, present, past). Unfortunately, I don't believe this works either but it's difficult to tell since it's too late to test properly. 


WHEN I click into a timeblock
THEN I can enter an event

- I used a text area (bootstrap) so that the user is able to input their event, then I added a save button so that the user is able to store that data. In javascript, I linked the save button to the local storage to keep the data visible. 


WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

- tried doing this in lines 47-96 in the javascript (doesn't work). The logic was to set a variable that held the event description as a value, then to show that in the console log and to store that data in local storage.  


WHEN I refresh the page
THEN the saved events persist

- tried doing this in 100-17 by defining the variable of description to get the value added and then setting and getting the item to the local storage. (doesn't work)