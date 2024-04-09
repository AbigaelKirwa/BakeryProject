import React from 'react';
import { Button, Grid, Toolbar, Typography } from '@mui/material'
import StrawBerryCake from '../../assets/images/landing page/home/strawberry-cake.png';
import CakeIcon from '../../assets/images/landing page/home/Cake.png';
import Confectionery from '../../assets/images/landing page/home/Confectionery.png';
import Doughnut from '../../assets/images/landing page/home/Doughnut.png';
import Cookies from '../../assets/images/landing page/home/Cookies.png';



const Home = () => {
  return (
    <div style={{background:"linear-gradient(to bottom right, #2C3260, #151A2E)"}}>
        <Typography textAlign="center" variant='h1' fontFamily='Carattere' color='white' pt='15px' >Oka Bakeries</Typography>
        <Grid container alignItems="center" justifyContent="center" spacing={{xs:2, md:8}} columns={{xs:1, sm:8, md:12}} pt="3em" pb="1em" sx={{pl:{md:'4em',xs:'2em'}}}>
            <Grid container xs={10} sm={8} md={4}>
                <Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Toolbar sx={{gap:"1em"}}>
                        <img src={CakeIcon} alt='food' style={{width:"35%"}}/>
                        <Typography variant='h6' paddingTop="12px" fontWeight="bold" color='#fff'>Cakes</Typography>
                    </Toolbar>
                    <Typography paragraph color="#fff" fontSize="13px" textAlign='justify' paddingTop='7px' lineHeight='27px'>
                        Treat yourself to miniature delights topped with creamy frosting 
                        and whimsical decorations, each cupcake a delightful blend of
                        moist cake and decadent sweetness.
                    </Typography>
                </Grid>
                <Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Toolbar sx={{gap:"1em"}}>
                        <img src={Confectionery} alt='food'  style={{width:"25%"}}/>
                        <Typography variant='h6' paddingTop="12px" fontWeight="bold" color='#fff'>Cupcakes</Typography>
                    </Toolbar>
                    <Typography paragraph color="#fff" fontSize="13px" textAlign='justify' paddingTop='7px' lineHeight='27px'>
                        Treat yourself to miniature delights topped with creamy frosting 
                        and whimsical decorations, each cupcake a delightful blend of
                        moist cake and decadent sweetness.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sm={0} md={3} sx={{display:{md:'flex', sm:'none', xs:'none'}}} flexDirection="column" justifyContent="center" alignItems="center">
                <Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <img alt="cake" src={StrawBerryCake} style={{paddingLeft:"2em", width:"90%"}}/>
                    <Button sx={{backgroundColor:"#ECC051", borderRadius:"50px", width:"70%", height:"50px", fontSize:"120%", color:"#151A2E", fontWeight:"bold", marginBottom:"1em"}}>Buy Now</Button>
                </Grid>
            </Grid>
            <Grid container xs={10} sm={8} md={4}>
                <Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Toolbar sx={{gap:"1em"}}>
                        <img src={Doughnut} alt='food' style={{width:"25%"}}/>
                        <Typography variant='h6' paddingTop="12px" fontWeight="bold" color='#fff'>Cupcakes</Typography>
                    </Toolbar>
                    <Typography paragraph color="#fff" fontSize="13px" textAlign='justify' paddingTop='7px' lineHeight='27px'>
                        Dive into a world of celebration with towering layers of sponge 
                        cake adorned with velvety buttercream, offering a symphony of 
                        flavors and textures in every slice.
                    </Typography>
                </Grid>
                <Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Toolbar sx={{gap:"1em"}}>
                        <img src={Cookies} alt='food'/>
                        <Typography variant='h6' paddingTop="12px" fontWeight="bold" color='#fff'>Cakes</Typography>
                    </Toolbar>
                    <Typography paragraph color="#fff" fontSize="13px" textAlign='justify' paddingTop='7px' lineHeight='27px'>
                        Treat yourself to miniature delights topped with creamy frosting 
                        and whimsical decorations, each cupcake a delightful blend of
                        moist cake and decadent sweetness.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default Home