import { ImageList, Typography, Grid } from '@mui/material'
import React from 'react'
import Baker1 from '../../assets/images/landing page/bakers/baker1.png'
import Baker2 from '../../assets/images/landing page/bakers/baker2.png'
import Baker3 from '../../assets/images/landing page/bakers/baker3.png'
import Baker4 from '../../assets/images/landing page/bakers/baker4.png'
import Baker5 from '../../assets/images/landing page/bakers/baker5.png'

const Bakers = () => {
  return (
    <div>
        <Typography textAlign="center" variant='h1' fontFamily='Carattere' color='#ECC051' pt='0.5em' fontSize='80px' >Our Bakers</Typography>
        <Grid container gap={8} gridAutoColumns={5} display="flex" alignItems="center" justifyContent="center" pt='1em'>
            <Grid item>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <img src={Baker1} style={{width:"200px"}}/>
                    <Typography color='white' fontWeight='600' textAlign='center'>Daily Fresh</Typography>
                </div>
            </Grid>
            <Grid item>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <img src={Baker2} style={{width:"170px"}}/>
                    <Typography color='white' fontWeight='600' textAlign='center'>Bakery Shop</Typography>
                </div>
            </Grid>
            <Grid item>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <img src={Baker3} style={{width:"150px"}}/>
                    <Typography color='white' fontWeight='600' textAlign='center'>The Bakery</Typography>
                </div>
            </Grid>
            <Grid item>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <img src={Baker4} style={{width:"160px"}}/>
                    <Typography color='white' fontWeight='600' textAlign='center'>Family Bakery</Typography>
                </div>
            </Grid>
            <Grid item>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <img src={Baker5} style={{width:"160px"}}/>
                    <Typography color='white' fontWeight='600' textAlign='center'>Pastry Shop</Typography>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Bakers