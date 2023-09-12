# Screenmedia Tech Test

Simple React app built with Vite which grabs user geolocation and uses it to fetch 5 day weather forecast

## Running

Note: Requires npm to run

`npm install` then `npm run dev` to see it running it the console.

## Tests

Not included due to time but would be structured as follows:

### RTL Integration tests

Top level, testing integration of components/hooks

- Verify that the accordions all display when the (mocked) endpoint returns a success response
- Verify failure state when (mocked) endpoint returns error
- Verify failure state when geolocation permission is not given
- Verify failure state when geolocation is not available

### Unit tests

Component level, testing the component in isolation

- Verify that the WeatherPanel generates the correct url
- Verify that the ForecastAccordion displays correct summary
- Verify that the ForecastAccordion opens and closes
- Verify that the ForecastAccordion displays correct content when open
- Verify that the useFetch hook correctly returns loading/data/error from a mocked endpoint
- Verify that the useGeolocation hook correctly returns loading/data/error from a mocked geolocation api

## Further work

With more time, the following work would be included:

- Styling
- Expanded weather display. Accordions would show icon for weather type, colours for temps, and surface the missing weather data such as wind, rain chance
- Proptypes or conversion to typescript
- Format values better (especially the temps)
- Move API key and url to config
