import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Toolbar, Typography } from "@mui/material";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const BarGraph = ({weatherData}) => {
    const data = {
        labels: [
          "2024-06-01 00:00",
          "2024-06-01 03:00",
          "2024-06-01 06:00",
          "2024-06-01 09:00",
          "2024-06-01 12:00",
          "2024-06-01 15:00",
          "2024-06-01 18:00",
          "2024-06-01 21:00"
        ],
        datasets: [
            {
              label: 'Temperature (°C)',
              data: weatherData?.data?.map((temp)=> temp.app_temp),
              backgroundColor: 'darkseagreen',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              width: "20px"
            }
          ]
    }
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Temperature Variations on June 1, 2024',
             color: '#406882',
            align:"start",
            font: {
                size: 20
            }
          },
        },
      };
    
    return (
        <div>
            <Toolbar>
              <Typography sx={{fontWeight : "bold" , fontSize : "20px"}}>
                Bar Graph
              </Typography>
            </Toolbar>
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarGraph;