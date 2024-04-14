import React from 'react';
import { Button, Grid, Toolbar, Typography } from '@mui/material'
import StrawBerryCake from '../../assets/images/landing page/home/blueberry-cake.png';
import CakeIcon from '../../assets/images/landing page/home/Cake.png';
import Confectionery from '../../assets/images/landing page/home/Confectionery.png';
import Doughnut from '../../assets/images/landing page/home/Doughnut.png';
import Cookies from '../../assets/images/landing page/home/Cookies.png';

const LeftFoodArray = [
    {id:1, image:CakeIcon, heading:"Cakes", text:"Treat yourself to miniature delights topped with creamy frosting and whimsical decorations, each cupcake a delightful blend of moist cake and decadent sweetness."},
    {id:2, image:Confectionery, heading:"Cupcakes", text:"Dive into a world of celebration with towering layers of sponge cake adorned with velvety buttercream, offering a symphony of flavors and textures in every slice."},
]

const RightFoodArray = [
    {id:1, image:Doughnut, heading:"Doughnuts", text:"Savour the comforting taste of flaky pastry crusts filled with luscious fruit, rich custard, or savoury fillings, offering a slice of home-made goodness in every bite."},
    {id:2, image:Cookies, heading:"Cookies", text:"Indulge in a delightful array of crispy, chewy, and flavourful cookies that are perfect for any sweet craving. Various yummy flavours for every buyer."},
]

const Home = () => {
  return (
    <div style={{background:"linear-gradient(to bottom right, #2C3260, #000406)", paddingBottom:"5%"}}>
        <Typography textAlign="center" variant='h1' fontFamily='Carattere' color='white' pt='10px' fontSize='120px' >Oka Bakeries</Typography>
        <Grid container item alignItems="center" justifyContent="center" spacing={{xs:2, md:2}} columns={{xs:1, sm:8, md:12}} pb="1em">
            <Grid container item xs={10} sm={8} md={3}>
                {LeftFoodArray.map((leftFood)=>(
                    <Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center" key={leftFood.id}>
                        <Toolbar sx={{gap:"1em"}}>
                            <img src={leftFood.image} alt='food' style={{width:"35%"}}/>
                            <Typography variant='h6' paddingTop="12px" fontWeight="bold" color='#fff'>{leftFood.heading}</Typography>
                        </Toolbar>
                        <Typography paragraph color="#fff" fontSize="13px" textAlign='justify' paddingTop='7px' lineHeight='27px'>{leftFood.text}</Typography>
                    </Grid>
                ))}
            </Grid>
            <Grid container item sm={0} md={4} sx={{display:{md:'flex', sm:'none', xs:'none'}}} flexDirection="column" justifyContent="center" alignItems="center">
                <Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <img alt="cake" src={StrawBerryCake} style={{paddingLeft:"2em", width:"90%"}}/>
                    <Button sx={{backgroundColor:"#ECC051", borderRadius:"50px", width:"70%", height:"50px", fontSize:"120%", color:"#151A2E", fontWeight:"bold", marginBottom:"1em", marginTop:"-20px"}}>Buy Now</Button>
                </Grid>
            </Grid>
            <Grid container item xs={10} sm={8} md={3}>
                {RightFoodArray.map((rightFood)=>(
                    <Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center" key={rightFood.id}>
                        <Toolbar sx={{gap:"1em"}}>
                            <img src={rightFood.image} alt='food' style={{width:"35%"}}/>
                            <Typography variant='h6' paddingTop="12px" fontWeight="bold" color='#fff'>{rightFood.heading}</Typography>
                        </Toolbar>
                        <Typography paragraph color="#fff" fontSize="13px" textAlign='justify' paddingTop='7px' lineHeight='27px'>{rightFood.text}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </div>
  )
}

export default Home