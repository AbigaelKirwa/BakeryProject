import { Grid, Typography } from '@mui/material'
import React from 'react'
import Category1 from '../../assets/images/landing page/categories/category1.png'
import Category2 from '../../assets/images/landing page/categories/category2.png'
import Category3 from '../../assets/images/landing page/categories/category3.png'
import Category4 from '../../assets/images/landing page/categories/category4.png'
import Category5 from '../../assets/images/landing page/categories/category5.png'
import Category6 from '../../assets/images/landing page/categories/category10.png'
import Category7 from '../../assets/images/landing page/categories/category7.png'
import Category8 from '../../assets/images/landing page/categories/category8.png'
import TypographyHeader from '../../components/TypographyHeader'

const categoryDetails = [
    { id:1, image:Category1, name:'Croissant'},
    { id:2, image:Category2, name:'Cookies'},
    { id:3, image:Category3, name:'Cupcakes'},
    { id:4, image:Category4, name:'Cakes'},
    { id:5, image:Category5, name:'Doughnuts'},
    { id:6, image:Category6, name:'Pies'},
    { id:7, image:Category7, name:'Bread'},
    { id:8, image:Category8, name:'Macaroons'},
]

const Categories = () => {
  return (
    <div id='Categories' style={{background:"#D9D9D9", paddingTop:"20px", paddingBottom:"5%"}}>
        <TypographyHeader>
            <div style={{color:"#151A2E"}}>Categories</div>
        </TypographyHeader>
        {/* <Grid container spacing={{md:2}} gap={2} md={12} alignItems='center' justifyContent='center' pt={8}>
            {categoryDetails.map((categoryDetail)=>(
            <Grid item md={4} sm={6} xs={2} key={categoryDetail.id}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <img src={categoryDetail.image} style={{width:"80%"}} alt='pastry'/>
                    <Typography color='#151A2E' fontWeight='800' textAlign='center' fontSize='30px' pt={3}>{categoryDetail.name}</Typography>
                </div>
            </Grid>
            ))}
        </Grid> */}
        <Grid container gap={6} alignItems='center' justifyContent='center' pt={8}>
    {categoryDetails.map((categoryDetail)=>(
    <Grid item xs={9} sm={5} md={3.5} key={categoryDetail.id}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <img src={categoryDetail.image} style={{width:"100%"}} alt='pastry'/>
            <Typography color='#151A2E' fontWeight='800' textAlign='center' fontSize='25px' pt={3}>{categoryDetail.name}</Typography>
        </div>
    </Grid>
    ))}
</Grid>

    </div>
  )
}

export default Categories