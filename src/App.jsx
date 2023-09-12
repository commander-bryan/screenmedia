import { Alert } from '@mui/material';
import WeatherPanel from './components/WeatherPanel/WeatherPanel';

import useGeolocation from './hooks/useGeolocation';

import './App.css'

function App() {
  const { geolocation, error: geoError } = useGeolocation();

  return (
    <>
        {geoError && (<Alert severity="error">{geoError}</Alert>)}
        {!geoError && geolocation && (<WeatherPanel geolocation={geolocation} />)}
    </>
  )
}

export default App
