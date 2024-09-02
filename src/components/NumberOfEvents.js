import { useState } from "react";

const NumberOfEvents = () => {
    const [number, setNumber] = useState(32)
    const handleInputChanged = (e) => {
        const value = e.target.value
        if (e.target.value === '') {
            setNumber(0)
        } else {
            setNumber(e.target.value)
        }

        setNumber(value)
    }

    return (
        <div id="numberOfEvents">
            <label>Number of Events</label>
            <input
                type="text"
                className="number"
                value={number}
                onChange={handleInputChanged}
            />
        </div>
    )
}

export default NumberOfEvents;