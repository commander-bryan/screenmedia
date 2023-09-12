import { useState } from 'react';
import { format } from 'date-fns';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

const ForecastAccordion = ({
    threeHourForecast
}) => {
    const [open, setOpen] = useState(false);
    const { dt, main : {
        temp,
        temp_max,
        temp_min,
        humidity,
        feels_like
    }} = threeHourForecast;

    return (
        <Accordion expanded={open} onChange={() => setOpen(!open)}>
            <AccordionSummary>
                <Typography>{format(new Date(dt*1000), 'do MMM hbbb')}: {temp} / {feels_like}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Max temp: {temp_max}
                </Typography>
                <Typography>
                    Min temp: {temp_min}
                </Typography>
                <Typography>
                    Feels like: {feels_like}
                </Typography>
                <Typography>
                    Humidity: {humidity}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default ForecastAccordion;
