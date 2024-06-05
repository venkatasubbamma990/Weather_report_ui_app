import React, { useState, useEffect } from 'react';
import '../App.css';
import Carousel from './Carousel';
import DatePicker from './DatePicker'
import { Box, Typography, Paper, LinearProgress, Grid , Alert  ,AlertTitle} from '@mui/material';

function Dashboard() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewType, setViewType] = useState('daily');
 

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

//   const fetchAllWeatherData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const promises = locations.map(location => fetchWeather(location));
//       const results = await Promise.all(promises);
//       setWeatherData(results);
//       console.log( "results" , results)
//     } catch (error) {
//       setError(error.message);
//     }
//     setLoading(false);
//   };

  useEffect(() => {
    fetchWeather();
  }, [selectedDate, viewType]);

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      {loading &&  <Box display="flex" flexDirection="column" alignItems="center" mt={2} p={5}>
            <Alert severity="info" style={{ display: 'flex', alignItems: 'center' }}>
            
              <Box p={3}>
                <AlertTitle>Fetching Reports </AlertTitle>
                We are fetching the reports. Please wait.......
              </Box>
              <LinearProgress style={{ width: '100%' }} />
              
            </Alert>
            
          </Box>}
      {weatherData && (
        <div className="dashboard">
          {/* <Carousel weatherData={weatherData} /> */}
          {
              JSON.stringify(weatherData)
          }
        </div>
      )}
      {/* <div className="date-picker">
        <DatePicker setSelectedDate={setSelectedDate} />
      </div>  */}
    </div>
  );
}

export default Dashboard;
