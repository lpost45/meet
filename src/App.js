import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';
import NumberOfEvents from './components/NumberOfEvents';
import mockData from './mock-data';
import { extractLocations } from './api';
import { useEffect, useState } from 'react';
const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const fetchData = async () => {
    const allEvents = mockData;
    const filteredEvents = currentCity === "See all cities" ? allEvents : allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }
  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

return (
  <div className='App'>
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/>
    <NumberOfEvents setCurrentNOE={setCurrentNOE} />
    <EventList events={events} />
  </div>
)
}

export default App;