import { useState } from "react";
import PropTypes from 'prop-types';

const NumberOfEvents = ({ setCurrentNOE }) => {
    const [number, setNumber] = useState(32)
    const handleInputChanged = (e) => {
        const value = e.target.value
        if (e.target.value === '') {
            setNumber(0)
        } else {
            setNumber(e.target.value)
        }

        setCurrentNOE(value);
    }

    return (
        <div id="numberOfEvents">
            <label>
                Number of Events
            <input
                type="text"
                className="number"
                value={number}
                onChange={handleInputChanged}
            />
            </label>
        </div>
    )
}

export default NumberOfEvents;

NumberOfEvents.propTypes = {
    setCurrentNOE: PropTypes.func.isRequired
}