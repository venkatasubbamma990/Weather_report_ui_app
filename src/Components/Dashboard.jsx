import React, { useState, useEffect } from 'react';
import '../App.css';
import DashboardCarousel from './DashboardCarousel';
import BarGraph from './BarGraph'
import {
  Box,
  Grid,
  LinearProgress,
  Alert,
  AlertTitle,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import WeaterCards from './WeatherCard';
import TempCalendar from './DatePicker';

function Dashboard() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktopSmall = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktopLarge = useMediaQuery(theme.breakpoints.up("lg"));
  


  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.weatherbit.io/v2.0/history/hourly?lat=35.775&lon=-78.638&start_date=2024-06-01&end_date=2024-06-02&tz=local&key=f7a42e4382a94e21b2df3e63b7ff4956`);
      const data = await response.json();
      console.log("Data:", data);
      console.log("Response:", response);
      if (response.ok) {
        setWeatherData(data);
        setLoading(false)
      } else {
        setLoading(false)
        throw new Error(data.error || 'Failed to fetch weather data');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);

    }
  };

  useEffect(() => {
    fetchWeather();
  }, [selectedDate]);


  return (

    <Grid container >
      <h1 >Weather Dashboard</h1> 
      {loading ? <Box display="flex" flexDirection="column" alignItems="center" mt={2} >
        <Alert severity="info" style={{ display: 'flex', alignItems: 'center' }}>
          <Box p={3}>
            <AlertTitle>Fetching Reports </AlertTitle>
            We are fetching the reports. Please wait.......
          </Box>
          <LinearProgress style={{ width: '100%' }} />
        </Alert>
      </Box>
        :
        <Grid container>
          <Grid item  xs={12} lg={12} md={12} sm={12} >
            <WeaterCards />
          </Grid>
          <Grid item xs={12} lg={12} md={12} sm={12}>
            <Grid container >
            <Grid item xs={12} lg={6} md={6} sm={6}>
              <BarGraph weatherData={weatherData} />
            </Grid>
            <Grid item xs={12} lg={6} md={6} sm={6}>
              <DashboardCarousel />
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={6}>
            <TempCalendar />
          </Grid>
        </Grid>
       
      }
     
    </Grid>
  );
}

export default Dashboard;
