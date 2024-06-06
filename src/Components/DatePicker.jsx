import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Grid, Paper, Toolbar, Typography } from '@mui/material';

const localizer = momentLocalizer(moment);

const TempCalendar = () => {
  
  const TemperatureData = [
    { title: 'Temperature: 20°C', start: new Date(2024, 5, 1), end: new Date(2024, 5, 1) },
    { title: 'Temperature: 22°C', start: new Date(2024, 5, 2), end: new Date(2024, 5, 2) },
    { title: 'Temperature: 24°C', start: new Date(2024, 5, 3), end: new Date(2024, 5, 3) },
    { title: 'Temperature: 25°C', start: new Date(2024, 5, 8), end: new Date(2024, 5, 14) },
    { title: 'Temperature: 26°C', start: new Date(2024, 5, 15), end: new Date(2024, 5, 21) },
    { title: 'Temperature: 27°C', start: new Date(2024, 5, 22), end: new Date(2024, 5, 28) },
  
  ];

  return (
    <Grid container spacing={2} mt={5}>
      <Grid item xs={12}>
      <Toolbar>
        <Grid xs={12}>
          <Typography body1 
          sx={{fontWeight : "bold",
        }}
          >
            Temperature
          </Typography>
          </Grid>
      </Toolbar>
      <Paper sx={{height: "500px", width : "800px"}}>
      
        <Calendar
          localizer={localizer}
          events={TemperatureData}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week', 'day']}
          defaultView="month"
        />
      </Paper>
      </Grid>
     
    </Grid>

  );
};

export default TempCalendar
