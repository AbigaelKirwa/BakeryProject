import { Typography, Grid, Box } from '@mui/material'
import React from 'react'
import Baker1 from '../../assets/images/landing page/bakers/baker1.png'
import Baker2 from '../../assets/images/landing page/bakers/baker2.png'
import Baker3 from '../../assets/images/landing page/bakers/baker3.png'
import Baker4 from '../../assets/images/landing page/bakers/baker4.png'
import Baker5 from '../../assets/images/landing page/bakers/baker5.png'

const confectionaryDetails =[
    { id:1, image:Baker1, name:'Dairy Fresh'},
    { id:2, image:Baker2, name:'Bakery Shop'},
    { id:3, image:Baker3, name:'The Bakery'},
    { id:4, image:Baker4, name:'Family Bakery'},
    { id:5, image:Baker5, name:'Pastry Shop'},
]

const imageWidth = (src:string) =>{
    if (src === Baker1) {return "200px"}
    else if (src === Baker2) {return "170px"}
    else if (src === Baker3) {return "150px"}
    else if (src === Baker4) {return "160px"}
    else if (src === Baker5) {return "160px"}
}

const Bakers = () => {
  return (
    <div style={{background:"linear-gradient(to bottom right, #2C3260, #000406)", paddingBottom:"5%"}}>
        <Typography textAlign="center" variant='h1' fontFamily='Carattere' color='#ECC051' pt='0.5em' fontSize='80px' >Our Bakers</Typography>
        <Grid container gap={7} gridAutoColumns={5} alignItems="center" justifyContent="center" pt='1em'>
            {confectionaryDetails.map((confectionaryDetail)=>(
                <Grid item key={confectionaryDetail.id}>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <Box component="img" src={confectionaryDetail.image} sx={{width:imageWidth(confectionaryDetail.image)}}/>
                        <Typography color='white' fontWeight='600' textAlign='center'>{confectionaryDetail.name}</Typography>
                    </div>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default Bakers