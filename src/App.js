import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';
import NumberOfEvents from './components/NumberOfEvents';
import mockData from './mock-data';
import { extractLocations, getEvents } from './api';
import { useEffect, useState } from 'react';
import { InfoAlert, ErrorAlert } from './components/Alert';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ? allEvents : allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }
  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

return (
  <div className='App'>
    <div className='alerts-container'>
      {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
      {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
    </div>
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert}/>
    <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert}/>
    <EventList events={events} />
  </div>
)
}

export default App;