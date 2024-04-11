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

const Categories = () => {
  return (
    <div style={{background:"#D9D9D9", paddingTop:"20px", paddingBottom:"5%"}}>
        <TypographyHeader>
            <div style={{color:"#151A2E"}}>Categories</div>
        </TypographyHeader>
        <Grid container spacing={{md:8}} gap={8} gridAutoColumns={2} alignItems='center' justifyContent='center' pt={8}>
            <Grid item>
                <div>
                    <img src={Category1} alt='pastry'/>
                    <Typography color='#151A2E' fontWeight='800' textAlign='center' fontSize='30px' pt={3}>Croissant</Typography>
                </div>
            </Grid>
            <Grid item>
                <div>
                    <img src={Category2} alt='pastry'/>
                    <Typography color='#151A2E' fontWeight='800' textAlign='center' fontSize='30px' pt={3}>Cookies</Typography>
                </div>
            </Grid>
            <Grid item>
                <div>
                    <img src={Category3} alt='pastry'/>
                    <Typography color='#151A2E' fontWeight='800' textAlign='center' fontSize='30px' pt={3}>Cupcakes</Typography>
                </div>
            </Grid>
            <Grid item>
                <div>
                    <img src={Category4} alt='pastry'/>
                    <Typography color='#151A2E' fontWeight='800' textAlign='center' fontSize='30px' pt={3}>Cakes</Typography>
                </div>
            </Grid>
            <Grid item>
                <div>
                    <img src={Category5} alt='pastry'/>
                    <Typography color='#151A2E' fontWeight='800' textAlign='center' fontSize='30px' pt={3}>Doughnuts</Typography>
                </div>
            </Grid>
            <Grid item>
                <div>
                    <img src={Category6} alt='pastry'/>
                    <Typography color='#151A2E' fontWeight='800' textAlign='center' fontSize='30px' pt={3}>Pies</Typography>
                </div>
            </Grid>
            <Grid item>
                <div>
                    <img src={Category7} alt='pastry'/>
                    <Typography color='#151A2E' fontWeight='800' textAlign='center' fontSize='30px' pt={3}>Bread</Typography>
                </div>
            </Grid>
            <Grid item>
                <div>
                    <img src={Category8} alt='pastry'/>
                    <Typography color='#151A2E' fontWeight='800' textAlign='center' fontSize='30px' pt={3}>Macaroons</Typography>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Categories