# Third-Party-APIs-Work-Day-Scheduler-LW

Final Link to Project: 
repo link: 

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


WHEN I click into a timeblock
THEN I can enter an event

- I used a text area (bootstrap) so that the user is able to input their event, then I added a save button so that the user is able to store that data. In javascript, I linked the save button to the local storage to keep the data visible. 


WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage


WHEN I refresh the page
THEN the saved events persist