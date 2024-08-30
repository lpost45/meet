import { useState } from "react";


const Event = ({event}) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li>
            <p>{event.summary}</p>
            <p>{event.start?.dateTime}</p>
            <p>{event.location}</p>
            <button onClick={() => setShowDetails(!showDetails)}>
                { showDetails ? "hide details" : "show details"}
            </button>
            {
                showDetails ? <p className="details">{event.description}</p> : <></>
            }
        </li>
    );
}

export default Event;