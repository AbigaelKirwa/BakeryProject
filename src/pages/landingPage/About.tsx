import { Grid, Typography } from '@mui/material'
import React from 'react'
import AboutPlatter from "../../assets/images/landing page/about/about-platter.png"
import AboutCake from "../../assets/images/landing page/about/about-cake.png"
import TypographyHeader from '../../components/TypographyHeader'

const About = () => {
  return (
    <div style={{background:"#D9D9D9", paddingTop:"20px", paddingBottom:"5%"}}>
      <TypographyHeader>
        <div style={{color:"#151A2E"}}>About Us</div>
      </TypographyHeader>
      <Grid container spacing={{md:8}} columns={{md:12, sm:8, xs:8}} sx={{mt:{md:'-23px',sm:'30px', xs:'40px'}}} display='flex' alignItems='center' justifyContent='center'>
        <Grid item md={6} sm={6} xs={6}>
          <Typography textAlign='justify' lineHeight='50px' pl='4em' sx={{pl:{md:'4em', sm:'0'}}}>
            Oka bakery is your one stop online shop for all baked products. 
            Gone are the days where you had to use multiple social media apps 
            to reach home bakers. Using our application, you can shop from multiple 
            home bakers and have your goods delivered in one go! Planning for events 
            and personal shopping has never been easier!
            Choose from different categories of confectioneries and pick the specific flavour and baker 
            you would like to order from, and add the item to cart. You can select items from different 
            vendors and place them all in your cart. Order and pay for the items and voila! We will deliver it to you.
          </Typography>
        </Grid> 
        <Grid item md={6} sx={{display:{md:"flex", sm:"none", xs:'none'}, justifyContent:"flex-end"}}>
          <div>
            <img src={AboutPlatter} style={{width:"100%"}}/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default About