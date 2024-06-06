
import React, { useEffect, useState } from "react";
import BarGraph from './BarGraph'
import {
    Card,
    Grid,
    Stack,
    Typography,
    useTheme,
    useMediaQuery,
    Toolbar,
} from "@mui/material";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import StormIcon from '@mui/icons-material/Storm';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import DashboardCarousel from "./DashboardCarousel";
const WeaterCards = ({ weatherData }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktopSmall = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const isDesktopLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const [selectedCity, setSelectedCity] = useState()
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
    const cardStyles = {
        padding: "10px",
        borderRadius: "8px",
        cursor: "pointer",
    };
    useEffect(() => {
        setSelectedCity(locations[0])
    }, [])


    return (
        <Grid container >

            {
                selectedCity && (
                    <Grid container spacing={1} >
                        <Grid item xs={12} sm={12} md={10} lg={12}>
                            <Toolbar sx={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                flexDirection: "row",
                                height: "100%",
                                width: "100%",
                                padding: "10px",
                                borderRadius: "8px",
                                cursor: "pointer",
                                backgroundColor: "#c3e9cb",
                                WebkitTextStroke: "0.5px rgba(234, 179, 8, 0.85)",
                                textStroke: "0.5px rgba(234, 179, 8, 0.85)",
                            }}>
                                {
                                    locations.map((loc) => (
                                        <Typography
                                            variant="body1"
                                            component="div"
                                            textAlign="center"
                                            fontWeight={700}
                                            color="#003780"
                                            margin={1}
                                            sx={{
                                                WebkitTextStroke: "0.5px #003780",
                                                textStroke: "0.5px rgba(234, 179, 8, 0.85)",

                                            }}
                                            onClick={() => { setSelectedCity(loc); console.log("selectedcity", loc) }}
                                        >
                                            {loc.city_name}
                                        </Typography>
                                    ))
                                }
                            </Toolbar>
                        </Grid>
                        <Grid item xs={10} sm={3} md={2.2} lg={4}>
                            <Card
                                sx={cardStyles}
                            >
                                <Stack direction="row" justifyContent="space-between">
                                    <DeviceThermostatIcon
                                        sx={{
                                            height: isDesktopSmall
                                                ? "40px"
                                                : isMobile
                                                    ? "26px"
                                                    : "50px",
                                            width: isDesktopSmall ? "40px" : isMobile ? "26px" : "50px",
                                            padding: isMobile ? "4px" : "8px",
                                            borderRadius: "10px",
                                            background: "rgba(234, 179, 8, 0.15)",
                                            color: "rgba(234, 179, 8, 0.85)",
                                        }}
                                    />
                                    <Stack direction="column">
                                        <Typography
                                            variant="h5"
                                            component="div"
                                            textAlign="end"
                                            fontWeight={900}
                                            color="rgba(234, 179, 8, 0.85)"
                                            margin={2}
                                            fontSize={
                                                isDesktopSmall ? "1.3rem" : isMobile ? "1.0rem" : "1.5rem"
                                            }
                                            sx={{
                                                WebkitTextStroke: "0.5px rgba(234, 179, 8, 0.85)",
                                                textStroke: "0.5px rgba(234, 179, 8, 0.85)",
                                            }}
                                        >
                                            {/* {weatherData?.data[0]?.temp }°C */}
                                            {selectedCity.Temperature}
                                        </Typography>
                                        <Typography
                                            paragraph
                                            fontSize={isMobile ? "10px" : "12px"}
                                            margin={0}
                                            fontWeight={700}
                                            color="#757575"
                                        >
                                            Temperature
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Grid>
                        <Grid item xs={10} sm={3} md={2.2} lg={4}>
                            <Card
                                sx={cardStyles}
                            >
                                <Stack direction="row" justifyContent="space-between">
                                    <ThermostatAutoIcon
                                        sx={{
                                            height: isDesktopSmall
                                                ? "40px"
                                                : isMobile
                                                    ? "26px"
                                                    : "50px",
                                            width: isDesktopSmall ? "40px" : isMobile ? "26px" : "50px",
                                            padding: isMobile ? "4px" : "8px",
                                            borderRadius: "10px",
                                            background: "#FFDEDE",
                                            color: "#F05454",

                                        }}
                                    />
                                    <Stack direction="column">
                                        <Typography
                                            variant="h5"
                                            component="div"
                                            textAlign="end"
                                            fontWeight={900}
                                            color="#F05454"
                                            margin={2}
                                            fontSize={
                                                isDesktopSmall ? "1.3rem" : isMobile ? "1.0rem" : "1.5rem"
                                            }
                                            sx={{
                                                WebkitTextStroke: "0.5px #F05454",
                                                textStroke: "0.5px #F05454",
                                            }}
                                        >
                                            {selectedCity.tempF}
                                        </Typography>
                                        <Typography
                                            paragraph
                                            fontSize={isMobile ? "10px" : "12px"}
                                            margin={0}
                                            fontWeight={700}
                                            color="#757575"
                                        >
                                            Temp_f
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Grid>
                        <Grid item xs={10} sm={3} md={2.2} lg={4}>
                            <Card
                                sx={cardStyles}
                            >
                                <Stack direction="row" justifyContent="space-between">
                                    <ThunderstormIcon
                                        sx={{
                                            height: isDesktopSmall
                                                ? "40px"
                                                : isMobile
                                                    ? "26px"
                                                    : "50px",
                                            width: isDesktopSmall ? "40px" : isMobile ? "26px" : "50px",
                                            padding: isMobile ? "4px" : "8px",
                                            borderRadius: "10px",
                                            background: "rgba(14, 165, 233, 0.25)",
                                            color: "rgb(14 165 233)",
                                        }}
                                    />
                                    <Stack direction="column">
                                        <Typography
                                            variant="h5"
                                            component="div"
                                            textAlign="end"
                                            fontWeight={900}
                                            color="rgb(14 165 233)"
                                            margin={2}
                                            fontSize={
                                                isDesktopSmall ? "1.3rem" : isMobile ? "1.0rem" : "1.5rem"
                                            }
                                            sx={{
                                                WebkitTextStroke: "0.5px rgb(14 165 233)",
                                                textStroke: "0.5px rgb(14 165 233)",
                                            }}
                                        >
                                            {selectedCity.Humidity}
                                        </Typography>
                                        <Typography
                                            paragraph
                                            fontSize={isMobile ? "10px" : "12px"}
                                            margin={0}
                                            fontWeight={700}
                                            color="#757575"
                                            textAlign="end"
                                        >
                                            Humidity
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Grid>
                        <Grid item xs={10} sm={3} md={2.2} lg={4}>
                            <Card
                                sx={cardStyles}
                            >
                                <Stack direction="row" justifyContent="space-between">
                                    <FilterDramaIcon
                                        sx={{
                                            height: isDesktopSmall
                                                ? "40px"
                                                : isMobile
                                                    ? "26px"
                                                    : "50px",
                                            width: isDesktopSmall ? "40px" : isMobile ? "26px" : "50px",
                                            padding: isMobile ? "4px" : "8px",
                                            borderRadius: "10px",
                                            background: "rgba(20, 184, 166, 0.2 )",
                                            color: "rgb(20 184 166)",
                                        }}
                                    />
                                    <Stack direction="column">
                                        <Typography
                                            variant="h5"
                                            component="div"
                                            textAlign="end"
                                            fontWeight={900}
                                            color="rgb(20 184 166)"
                                            margin={2}
                                            fontSize={
                                                isDesktopSmall ? "1.3rem" : isMobile ? "1.0rem" : "1.5rem"
                                            }
                                            sx={{
                                                WebkitTextStroke: "0.5px rgb(20 184 166)",
                                                textStroke: "0.5px rgb(20 184 166)",
                                            }}
                                        >
                                            {selectedCity.cloud}
                                        </Typography>
                                        <Typography
                                            paragraph
                                            fontSize={isMobile ? "10px" : "12px"}
                                            margin={0}
                                            fontWeight={700}
                                            color="#757575"
                                        >
                                            Cloud
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Grid>
                        <Grid item xs={10} sm={3} md={2.2} lg={4}>
                            <Card sx={cardStyles}>
                                <Stack direction="row" justifyContent="space-between">
                                    <StormIcon
                                        sx={{
                                            height: isDesktopSmall
                                                ? "40px"
                                                : isMobile
                                                    ? "26px"
                                                    : "50px",
                                            width: isDesktopSmall ? "40px" : isMobile ? "26px" : "50px",
                                            padding: isMobile ? "4px" : "8px",
                                            borderRadius: "10px",
                                            background: "rgba(139, 92, 246, 0.25)",
                                            color: "rgb(139 92 246)",
                                        }}
                                    />
                                    <Stack direction="column">
                                        <Typography
                                            variant="h5"
                                            component="div"
                                            textAlign="end"
                                            fontWeight={900}
                                            color="rgb(139 92 246))"
                                            margin={2}
                                            fontSize={
                                                isDesktopSmall ? "1.3rem" : isMobile ? "1.0rem" : "1.5rem"
                                            }
                                            sx={{
                                                WebkitTextStroke: "0.5px rgb(139 92 246)",
                                                textStroke: "0.5px rgb(139 92 246)",
                                            }}
                                        >
                                            {selectedCity.WindDegree}
                                        </Typography>
                                        <Typography
                                            paragraph
                                            fontSize={isMobile ? "10px" : "12px"}
                                            margin={0}
                                            fontWeight={700}
                                            color="#757575"
                                        >
                                            WindDegree
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Grid>
                    </Grid>)
            }


        </Grid>
    )
}
export default WeaterCards