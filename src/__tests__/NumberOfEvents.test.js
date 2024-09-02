import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsCompoonent;
    beforeEach(() => {
        NumberOfEventsCompoonent = render(<NumberOfEvents />);
    });
    test('number of events has the role of textbox', () => {
        const input = NumberOfEventsCompoonent.queryByRole('textbox');
        expect(input).toBeInTheDocument();
    });
    test('ensures the default value of the textbox is 32', () => {
        expect(NumberOfEventsCompoonent.getByRole('textbox')).toHaveValue('32');
    });
    test('textbox value changes according to what the user types', async () => {
        numberOfEvents = NumberOfEventsCompoonent.getByRole('textbox');
        const user = userEvent.setup();
        await user.type(numberOfEvents, '{backspace}{backspace}10');
        const allEvents = await getEvents();
        NumberOfEventsCompoonent.rerender(<NumberOfEvents />);
        expect(numberOfEvents).toHaveValue('10');
    })
})