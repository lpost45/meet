Feature: Specify Number of Events

    Scenario: The default 32 events are shown.
        Given the user opened the app
        When the user is viewing the events
        Then the number of events displayed should be 32

    Scenario: The user can change the number of events displayed.
        Given the user opened the app
        And the user is viewing the events
        When the user sets the number events to a number other than 32
        Then the set number of events should be displayed