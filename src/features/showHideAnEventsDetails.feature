Feature: Show/Hide Event Details

    Scenario: The event elements are collapsed by default.
        Given the user opened the app
        When the list of events is rendered
        Then event details should not show

    Scenario: A user can expand an event to see event details.
        Given the user sees the rendered events
        When the user clicks on the show details button
        Then the event details should be showing

    Scenario: A user can collapse an event to hide details.
        Given the user has clicked the show details button
        When the user clicks on the hide details button
        Then the event details should be hidden
