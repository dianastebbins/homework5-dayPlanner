# homework5-dayPlanner

## Project Description
A simple calendar application that allows the user to save events for each hour of the day.

## General Notes
### UI
```
Not exciting, sorry. Got a late start on this one and so did not have time to get uber-creative. I did change it to the best color scheme in the world though. No, not salmon, sorry. Shades of purple. 

If enough time tonight (Thursday) I would like to try and make the "buttons" appear somewhat smaller, but that is lower priority than other functionality.
```
### Current Date and Time display
```
The current time is displayed down to seconds...more for testing/proof that it is updating with a timer. For a "real" app, I would drop the seconds and slow the timer down to minute intervals instead of seconds.
```
### High Scores
```
```
### Problems
```
```

## Table of Contents
* [Project Details](#project-details)
* [Requirements](#requirements)
* [Page Design Notes](#page-design-notes)
* [Pseudocode](#pseudocode)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)
* [Tests](#tests)

## Project Details

## Requirements 
    (copied from Homework instructional README.md, for reference)

### Directions
```
Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.
```

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
-THEN I am presented with timeblocks for standard business hours
-WHEN I view the timeblocks for that day
-THEN each timeblock is color coded to indicate whether it is in the past, present, or future
-WHEN I click into a timeblock
-THEN I can enter an event
-WHEN I click the save button for that timeblock
-THEN the text for that event is saved in local storage
-WHEN I refresh the page
-THEN the saved events persist
```

## Page Design Notes
```
```

## Pseudocode
```
-When app starts/refreshes
-    retrieve task objects from local storage
-    display them on appropriate time block
-When user clicks save button
-    determine which time block needs saving
-    get the text
-    save the text to local saved object and to memory
-    refresh the page
Continually retrieve current date/time element
    update current date display
-    evaluate what hour it currently is and alter time block backgrounds appropriately (past/present/future)
-    refresh page
```

## Installation
url to deployed app: 

## Usage

## Credits
Requirements copied from provided Homework files of Full Stack Coding Bootcamp.

## License

## Badges

## Contributing

## Tests
LOL
