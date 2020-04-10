# Roadmap
All the ideas and todos for future releases, and all the basic planning is done here

## The basic app

Users will be able to log into their accounts, and the homepage by default should show their tasks for the current day.

They should be able to go to any date of any year and set and view tasks at that day. Tasks, like all todo apps, should have the functionality to be marked complete, and no-longer-important as well (Personal choice, as I can barely complete all the tasks I set for myself)

Users should have a Users page where:


### The basic requirements (For V1.0):
Release 1.0 and onwards will feature the basic functionality that gets the app _working and deployed (i.e., production ready)_. There will be less focus on the fronted and UI and more on the basic functionality.

#### The basic funcitonality for Release 1.0:
* Basic good looking UI
* User signup, login and logout
* User settings page, with profile picture and other options
* Move to any date, and set task for any date.
* Forward and Back buttons to go to the immediately prev and next days respectively.
* Task create, update, delete, mark complete, incomplete and no-longer-priority
* A functionality to see date-wise complete, incomplete and no-longer-priority tasks (as in $git history?)
* Once a user signs-in, The current date tasks should be shown.

	* Use docker? To host the running website on AWS or Heroku

### The Requirements for Release 2.0: 
For this release, my main focus will be to make this app more UI powerful, so my main focus will be on the front-end UI, security checks, and to pretty up things. Use Javascript libraries or React to create year navigation, etc. etc.

#### Basic requirements for Release 2.0:
* A beautiful home-page, when the user isn't logged in. Should show sign-up and sign-in options. Should resemble the cover of a physical year diary.
* Signing up should come with confirmation e-mails, for security reasons.
* The UI should be mobile friendly
* Page turning and Diary Animation
* Beautiful date-wise "pages", with ability to add time-wise tasks, as I prefer them. (Start time and end time)


### Ideas for future or these releases: 
* Month at a glance
* Week at a glance
* Color/Name labeled tasks or task categories
* Integrate some Google Calendar API?
* Task priorities
* Push notifications to the phones for Time management!
* Setting weekly tasks at once, for eg, set every "Friday 4-6pm" as Computer Graphics class.
