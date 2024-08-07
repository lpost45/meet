# Meet

## Objective

The objective for this project is to build a serverless, progressive web application with React using test-driven development technique. It uses Google Calendar API to fetch upcoming events.

## Features

- Filter Events by City
- Show/Hide Event Details
- Specify Number of Events
- Use the App When Offline
- Add an App Shortcut to the Home Screen
- Display Charts Visualizing Event Details

## User Stories

- As a user, I should be able to filter events by city, so that I can see what is happening in certain cities.
- As a user, I should be able to show and hide event details, so that I can have more insight on the events.
- As a user, I should be able to see a specific number of events in a given city, so that I can see how much is happening in a given city.
- As a user, I should be able to use the app when I'm offline, so that I am always able to see events happening in a given city.
- As a user, I should be able to add an app shortcut to the home screen, so that I can access the events quickly.
- As a user, I should be able to view charts visualizing event details, so that I am able to gain necessary knowledge about events in a given city.

## Scenarios

### Scenario 1

- Given the user has searched for a city;
- When the user has selected the city;
- Then the user should recieve a list of events happening in that city.

### Scenario 2

- Given the user wants to view the details of an event;
- When the user clicks on the event;
- Then the event details should be shown to the user.

### Scenario 3

- Given the user wanted to know the specific number of events;
- When the user searches and selects a city;
- Then the user should be shown the number of events happening in that city.

### Scenario 4

- Given the user wanted to use the app with no internet;
- When the user has no internet;
- Then the user should be able to access the app.

### Scenario 5

- Given the user was using the app on a mobile device;
- When the user chooses to add the apps shortcut to their homescreen;
- Then the app should be installed with a shortcut on their device.

### Scenario 6

- Given the user was viewing the events in a city;
- When the user accesses the events page;
- Then the user should see a chart displaying the events in that city.
