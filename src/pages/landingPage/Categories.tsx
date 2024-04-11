import { Grid, Typography } from '@mui/material'
import React from 'react'
import Category1 from '../../assets/images/landing page/categories/category1.png'
import Category2 from '../../assets/images/landing page/categories/category2.png'
import Category3 from '../../assets/images/landing page/categories/category3.png'
import Category4 from '../../assets/images/landing page/categories/category4.png'
import Category5 from '../../assets/images/landing page/categories/category5.png'
import Category6 from '../../assets/images/landing page/categories/category6.png'
import Category7 from '../../assets/images/landing page/categories/category7.png'
import Category8 from '../../assets/images/landing page/categories/category8.png'
import TypographyHeader from '../../components/TypographyHeader'

const categoryDetails = [
    {
        image:Category1,
        name:'Croissant'
    },
    {
        image:Category2,
        name:'Cookies'
    },
    {
        image:Category3,
        name:'Cupcakes'
    },
    {
        image:Category4,
        name:'Cakes'
    },
    {
        image:Category5,
        name:'Doughnuts'
    },
    {
        image:Category6,
        name:'Pies'
    },
    {
        image:Category7,
        name:'Bread'
    },
    {
        image:Category8,
        name:'Macaroons'
    },
]

const Categories = () => {
  return (
    <div style={{background:"#D9D9D9", paddingTop:"20px", paddingBottom:"5%"}}>
        <TypographyHeader>
            <div style={{color:"#151A2E"}}>Categories</div>
        </TypographyHeader>
        <Grid container spacing={{md:8}} gap={8} gridAutoColumns={2} alignItems='center' justifyContent='center' pt={8}>
            {categoryDetails.map((categoryDetail)=>(
            <Grid item>
                <div>
                    <img src={categoryDetail.image} alt='pastry'/>
                    <Typography color='#151A2E' fontWeight='800' textAlign='center' fontSize='30px' pt={3}>{categoryDetail.name}</Typography>
                </div>
            </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default Categories