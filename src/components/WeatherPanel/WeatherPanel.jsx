import { Alert, CircularProgress, Typography } from '@mui/material';
import ForecastAccordion from '../ForecastAccordion'

import useFetch from '../../hooks/useFetch';

const API_KEY='5959670a9d5a951a17b7ec43d23bf6c6';

const WeatherPanel = ({
    geolocation
}) => {
    const LATITUDE = geolocation.coords.latitude;
    const LONGITUDE = geolocation.coords.longitude;
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`;
    const { data, loading, error } = useFetch(API_URL);

    return (
        <>
            {loading && (
                <CircularProgress />
            )}
            {!loading && error && (
                <Alert severity="error">{error}</Alert>
            )}
            {data && (
                <>
                    <Typography>Your location is: {data.city.name}, {data.city.country}</Typography>
                    {data.list.map(forecastItem => <ForecastAccordion key={forecastItem.dt} threeHourForecast={forecastItem} />)}
                </>
            )}
        </>
    );
}

export default WeatherPanel;