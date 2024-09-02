import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import Event from "../components/Event";
import { getEvents } from "../api"; 
import { render, fireEvent, waitFor } from "@testing-library/react";
import mockData from "../mock-data";

describe('<Event /> component', () => {
    let EventComponent;
    const allEvents = getEvents();
    console.log(mockData[0]);
    beforeEach(() => {
        EventComponent = render(<Event event={mockData[0]}/>);
    });
    test('renders event title', () => {
        expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
    });
    test('renders event start time', () => {
       expect(EventComponent.queryByText(mockData[0].start.dateTime)).toBeInTheDocument();
    });
    test('renders event location', () => {
        expect(EventComponent.queryByText(mockData[0].location)).toBeInTheDocument();
    });
    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });
    test("by default, event's details section should be hidden", () => {
        const eventDetails = EventComponent.container.querySelector('details');
        expect(eventDetails).not.toBeInTheDocument();
    });
    test('shows the details section when the user clicks on the "show details" button', async () => {
        const button = EventComponent.queryByText('show details');
        fireEvent.click(button);
        await waitFor(() => expect(EventComponent.container.querySelector('.details')).toBeInTheDocument());
    });
    test('hides the details section when the user clicks on the "hide details" button', async () => {
        const button = EventComponent.queryByText('show details');
        fireEvent.click(button);
        let details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();

        const hideButton = EventComponent.queryByText('hide details');
        fireEvent.click(hideButton);
        details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    })
})