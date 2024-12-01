import { useState } from "react";
import PropTypes from 'prop-types';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState(32)
    const handleInputChanged = (e) => {
        const value = e.target.value;
        const nValue = Number(value);
        if (e.target.value === '') {
            setNumber(0)
        } else {
            setNumber(e.target.value)
        }

        setCurrentNOE(value);

        let errorText = '';
        if (isNaN(nValue) || nValue <= 0) {
            errorText = "Number is not valid.";
        } else if (nValue > 32) {
            errorText = "Maximum number of events to be shown is 32.";
        }
        setErrorAlert(errorText);
        if (!errorText) {
            setCurrentNOE(nValue);
        }

    }

    return (
        <div id="numberOfEvents">
            <label>
                Number of Events
                <input id="number-of-events" 
                    type="text" 
                    className="number" 
                    value={number} 
                    onChange={handleInputChanged} 
                    data-testid="numberOfEventsInput" 
                />
            </label>
        </div>
    )
}

export default NumberOfEvents;

NumberOfEvents.propTypes = {
    setCurrentNOE: PropTypes.func.isRequired
}