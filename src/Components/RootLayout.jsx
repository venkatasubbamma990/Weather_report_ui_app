import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Grid ,Box ,  useTheme,
  useMediaQuery,} from '@mui/material'


export default function RootLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktopSmall = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktopLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    
    <Grid container spacing={2} sx={{ backgroundColor: "beige" }}>
      <Grid item xs= {isMobile? 12 : isDesktopSmall ? 1  : isDesktopLarge ? 2 : 1} >
        <Navbar />
      </Grid>
      <Grid item xs={12} sm={10} md={10} lg={10}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
