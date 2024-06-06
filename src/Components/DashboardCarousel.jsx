import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Stack, CardHeader, Toolbar } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CloudCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };
  const getColor = (value) => {
    if (value >= 30) {
      return 'red'; // High temperature, use red color
    } else if (value >= 20) {
      return 'orange'; // Moderate temperature, use orange color
    } else {
      return 'green'; // Low temperature, use green color
    }
  };
  const locations = [
    {
        id: 1,
        city_name: "Raleigh",
        Temperature: 13.7,
        tempF: 51.8,
        Humidity: 82,
        cloud: 75,
        WindDegree: 220
    },
    {
        id: 2,
        city_name: "London",
        Temperature: 12.5,
        tempF: 56.8,
        Humidity: 87,
        cloud: 95,
        WindDegree: 180
    },
    {
        id: 3,
        city_name: "Paris",
        Temperature: 17.9,
        tempF: 65.8,
        Humidity: 72,
        cloud: 85,
        WindDegree: 210
    },
    {
        id: 4,
        city_name: "Denmark",
        Temperature: 14.7,
        tempF: 55.8,
        Humidity: 92,
        cloud: 45,
        WindDegree: 120
    }
]

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Toolbar>
        <Typography sx={{fontWeight : "bold",fontSize : "20px"}}>
        Weather Report
        </Typography>
      </Toolbar>
      <Slider {...settings}>
      {locations?.length > 0 &&
        locations.map((loc) => (
          <Card key={loc.id} sx={{ margin: '10px', borderRadius: '15px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundImage: 'linear-gradient(to bottom, aliceblue, burlywood)' }}>
          
            <CardContent>
            <Typography variant="h5" color="primary" component="div" sx={{color:"#003780" , backgroundColor : "#d0bd97" , fontFamily:"sans-serif" , fontWeight : "bold" , borderRadius : "10px"}}>
                {loc.city_name}
              </Typography>
              <Stack spacing={2} >
                <Typography variant="body1" color="textSecondary" component="p" sx={{fontWeight : "bold" ,pt:2}}>
                  Temperature: <span style={{ color: getColor(loc.Temperature)  }}>{loc.Temperature} °C</span>
                </Typography>
                <Typography variant="body1" color="textSecondary"  component="p" sx={{fontWeight : "bold"}}>
                  TempF: <span style={{ color: getColor(loc.tempF) }}>{loc.tempF} °F</span>
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p" sx={{fontWeight : "bold"}}>
                  Humidity: {loc.Humidity}%
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p" sx={{fontWeight : "bold"}}>
                  Cloud: {loc.cloud}%
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p" sx={{fontWeight : "bold"}}>
                  Wind Degree: {loc.WindDegree}°
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default CloudCarousel;
