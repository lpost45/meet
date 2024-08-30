import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import Event from "../components/Event";
import { getEvents } from "../api"; 
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('<Event /> component', () => {
    let EventComponent;
    const allEvents = getEvents();
    beforeEach(() => {
        EventComponent = render(<Event event={allEvents[0]}/>);
    });
    test('renders event title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });
    test('renders event start time', () => {
        expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
    });
    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });
    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });
    test("by default, event's details section should be hidden", () => {
        const eventDetails = EventComponent.container.querySelector('details');
        expect(eventDetails).not.toBeInTheDocument();
    });
    test('shows the details section when the user clicks on the "show details" button', async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('show details');
        await user.click(button);
        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();
    });
    test('hides the details section when the user clicks on the "hide details" button', async () => {
        const user = userEvent.setup();
        let button = EventComponent.queryByText('show details');
        await user.click(button);
        let details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();

        button = EventComponent.queryByText('hide details');
        await user.click(button);
        details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    })
})