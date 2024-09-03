import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE}) => {
    const [number, setNumber] = useState(32)
    const handleInputChanged = (e) => {
        const value = e.target.value
        if (e.target.value === '') {
            setNumber(0)
        } else {
            setNumber(e.target.value)
        }

        setCurrentNOE = value;
        setNumber(value)
    }

    return (
        <div id="numberOfEvents">
            <label>Number of Events</label>
            <input
                type="text"
                className="number"
                value={number ? number : setCurrentNOE}
                onChange={handleInputChanged}
            />
        </div>
    )
}

export default NumberOfEvents;