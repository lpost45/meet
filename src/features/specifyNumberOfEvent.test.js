import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/specifyNumberOfEvent.feature');

defineFeature(feature, test => {
    test('The default 32 events are shown.', ({ given, when, then }) => {
        given('the user opened the app', () => {

        });

        when('the user is viewing the events', () => {

        });

        then(/^the number of events displayed should be (\d+)$/, (arg0) => {

        });
    });

    test('The user can change the number of events displayed.', ({ given, and, when, then }) => {
        given('the user opened the app', () => {

        });

        and('the user is viewing the events', () => {

        });

        when(/^the user sets the number events to a number other than (\d+)$/, (arg0) => {

        });

        then('the set number of events should be displayed', () => {

        });
    });
})