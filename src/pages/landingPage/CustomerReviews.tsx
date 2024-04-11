import React from 'react'
import { Grid, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Review1 from '../../assets/images/landing page/customer_reviews/review1.png'
import Review2 from '../../assets/images/landing page/customer_reviews/review2.png'
import Review3 from '../../assets/images/landing page/customer_reviews/review3.png'
import TypographyHeader from '../../components/TypographyHeader';

const CustomerReviews = () => {
  return (
    <div style={{paddingBottom:"5%"}}>
        <TypographyHeader>
            <div style={{color:"#ECC051"}}>Customer Reviews</div>
        </TypographyHeader>
        <Grid container spacing={12} columns={{md:12, sm:8, xs:4}} alignItems='center' justifyContent='center' pt="5%" px="3%">
            <Grid item md={4} sm={4} xs={3}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <img src={Review1} alt='customer' style={{width:"60%"}}/>
                    <Typography color='#fff' fontWeight='700' fontSize='23px' pt='5%'> Alfred Rotich </Typography>
                    <Typography color='#fff' fontSize='13px' lineHeight='30px' textAlign='justify' pt='5%'>
                        I was very pleased to stumble upon this online bakery service! 
                        From start to finish, my experience was nothing short of delightful. 
                        The website was user-friendly, making it easy for me to browse 
                        through the mouthwatering selection of treats. The ordering 
                        process was smooth, and I appreciated the various payment options 
                        available.
                    </Typography>
                    <div style={{paddingTop:"5%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center",  gap:"3%"}}>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarBorderIcon sx={{color:"#ECC051"}}/>
                    </div>
                </div>
            </Grid>
            <Grid item md={4} sm={4} xs={3}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <img src={Review2} alt='customer' style={{width:"60%"}}/>
                    <Typography color='#fff' fontWeight='700' fontSize='23px' pt='5%'> Jessica Too </Typography>
                    <Typography color='#fff' fontSize='13px' lineHeight='30px' textAlign='justify' pt='5%'>
                        When my order arrived, I was impressed by the careful packaging that ensured my pastries 
                        arrived fresh and intact. And oh, the taste! Each bite was a burst of flavor, confirming 
                        the expertise and passion of the bakers behind these delectable creations. Whether it 
                        was the fluffy croissants or the decadent cupcakes. 
                    </Typography>
                    <div style={{paddingTop:"5%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center",  gap:"3%"}}>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarBorderIcon sx={{color:"#ECC051"}}/>
                    </div>
                </div>
            </Grid>
            <Grid item md={4} sm={4} xs={3}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <img src={Review3} alt='customer' style={{width:"60%"}}/>
                    <Typography color='#fff' fontWeight='700' fontSize='23px' pt='5%'> Alfred Rotich </Typography>
                    <Typography color='#fff' fontSize='13px' lineHeight='30px' textAlign='justify' pt='5%'>
                        Using this online bakery service was an absolute delight! As someone with a busy schedule, 
                        having the convenience of ordering artisanal pastries from the comfort of my home was a 
                        game-changer. The website was visually appealing and easy to navigate, allowing me to 
                        explore the diverse range of treats on offer.
                    </Typography>
                    <div style={{paddingTop:"5%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center",  gap:"3%"}}>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarIcon sx={{color:"#ECC051"}}/>
                        <StarBorderIcon sx={{color:"#ECC051"}}/>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default CustomerReviews