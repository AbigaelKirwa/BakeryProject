import { Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AboutPlatter from "../../assets/images/landing page/about/about-platter.png"
import AboutCake from "../../assets/images/landing page/about/about-cake.png"

const About = () => {
  return (
    <div style={{background:"#D9D9D9", paddingTop:"20px"}}>
      <Typography textAlign="center" variant='h1' color="#151A2E" fontWeight="bold" fontSize="65px" pt='15px' >About Us</Typography>
      <Grid container columns={{md:12}} display='flex' alignItems='center' justifyContent='center' marginTop='-80px'>
        <Grid item md={6}>
          <Typography textAlign='justify' lineHeight='50px' pl='4em'>
            Oka bakery is your one stop online shop for all baked products. 
            Gone are the days where you had to use multiple social media apps 
            to reach home bakers. Using our application, you can shop from multiple 
            home bakers and have your goods delivered in one go! Planning for events 
            and personal shopping has never been easier!
          </Typography>
        </Grid>
        <Grid item md={6} sx={{display:"flex", justifyContent:"flex-end"}}>
          <img src={AboutPlatter} style={{width:"100%", marginRight:"-23px"}}/>
        </Grid>
      </Grid>
      <Grid container columns={{md:12}} display='flex' alignItems='center' justifyContent='center' marginTop='-220px'>
        <Grid item md={6}>
          <img src={AboutCake} style={{width:"90%", marginRight:"-23px"}}/>
        </Grid>
        <Grid item md={6} sx={{display:"flex"}}>
          <Typography textAlign='justify' lineHeight='50px' pr='4em'>
            Oka bakery is your one stop online shop for all baked products. 
            Gone are the days where you had to use multiple social media apps 
            to reach home bakers. Using our application, you can shop from multiple 
            home bakers and have your goods delivered in one go! Planning for events 
            and personal shopping has never been easier!
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default About