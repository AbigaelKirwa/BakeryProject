import { Grid, Typography } from '@mui/material'
import React from 'react'
import AboutPlatter from "../../assets/images/landing page/about/about-platter.png"
import TypographyHeader from '../../components/TypographyHeader'

const About = () => {
  return (
    <div id="About" style={{background:"#D9D9D9", paddingTop:"20px", paddingBottom:"5%"}}>
      <TypographyHeader >
        <div id="sectionName" style={{color:"#151A2E"}}>About Us</div>
      </TypographyHeader>
      <Grid container spacing={{md:8}} columns={{md:12, sm:8, xs:8}} sx={{mt:{md:'-23px',sm:'30px', xs:'40px'}}} display='flex' alignItems='center' justifyContent='center'>
        <Grid item md={6} sm={6} xs={6}>
          <Typography textAlign='justify' pl='4em' sx={{pl:{md:'4em', sm:'0'}, fontSize:{md:'15px',sm:'14px', xs:'13px'}, lineHeight:{md:'50px', sm:'50px', xs:'40px'}}}>
            Welcome to Oka Bakery, your go-to online shop for all things delightfully 
            indulgent! Our bakery serves up a mouthwatering array of baked goods, expertly crafted by our team of passionate bakers. 
            From the fluffiest doughnuts sprinkled with sugar to the richest, most decadent cakes, each 
            of our creations is made using only the finest ingredients. Our commitment to quality and 
            flavor shines through in every bite, whether it's a slice of our velvety chocolate cake or 
            one of our signature custard-filled pastries. With just a few clicks, you can have your favorite sweets 
            delivered right to your doorstep, freshly baked and beautifully packaged. 
          </Typography>
        </Grid> 
        <Grid item md={6} sx={{display:{md:"flex", sm:"none", xs:'none'}, justifyContent:"flex-end"}}>
          <div>
            <img src={AboutPlatter} style={{width:"100%"}} alt='cake'/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default About