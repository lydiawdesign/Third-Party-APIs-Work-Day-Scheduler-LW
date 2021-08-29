# Third-Party-APIs-Work-Day-Scheduler-LW

Final Link to Project: 
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


WHEN I click into a timeblock
THEN I can enter an event

- I used a text area (bootstrap) so that the user is able to input their event, then I added a save button so that the user is able to store that data. In javascript, I linked the save button to the local storage to keep the data visible. 


WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

- tried doing this in lines 144-207 in the javascript (doesn't work). The logic was to set a variable that held the event description as a value, then to show that in the console log and to store that data in local storage.  


WHEN I refresh the page
THEN the saved events persist