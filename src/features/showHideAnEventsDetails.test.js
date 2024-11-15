import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')

defineFeature(feature, test => {
    test('The event elements are collapsed by default.', ({ given, when, then }) => {
        given('the user opened the app', () => {

        });

        when('the list of events is rendered', () => {

        });

        then('event details should not show', () => {

        });
    });

    test('A user can expand an event to see event details.', ({ given, when, then }) => {
        given('the user sees the rendered events', () => {

        });

        when('the user clicks on the show details button', () => {

        });

        then('the event details should be showing', () => {

        });
    });

    test('A user can collapse an event to hide details.', ({ given, when, then }) => {
        given('the user has clicked the show details button', () => {

        });

        when('the user clicks on the hide details button', () => {

        });

        then('the event details should be hidden', () => {

        });
    });
});