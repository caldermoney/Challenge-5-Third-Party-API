Work Day Scheduler
A simple calendar app for scheduling your work day.

Features
Current date and time display.
Color-coded time blocks based on current time.
Saving of tasks to local storage.
Loading of tasks from local storage upon page reload.
Implementation
This application is implemented with HTML, CSS and JavaScript (jQuery). It uses the Day.js library to manage dates and times and Bootstrap for the UI. The local storage of the browser is used to persist tasks.

Usage
Open index.html in your web browser. Enter your tasks for each hour into the corresponding time block. Click the save button to save your tasks. They will be there even if you reload the page.

Code

HTML
The HTML includes a header and a series of time block elements, each with an id indicating the hour, a div showing the hour, a textarea for the task, and a save button.

CSS
The CSS is used to style the time blocks, textareas, and save buttons. It uses classes to color-code the time blocks based on whether the time they represent is in the past, present, or future.

JavaScript
The JavaScript uses jQuery to:

Display the current date and time.
Add classes to the time blocks based on the current time.
Save tasks to local storage when the save button is clicked.
Load tasks from local storage when the page is loaded.