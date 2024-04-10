import React from 'react'
import { Grid, Toolbar, Typography } from '@mui/material'
import Facebook from '../assets/images/footer/facebook.png'
import Twitter from '../assets/images/footer/Twitter.png'
import Tiktok from '../assets/images/footer/TikTok.png'
import SnapChat from '../assets/images/footer/Snapchat.png'

const Footer = () => {
  return (
    <div style={{background:"#D9D9D9", paddingTop:"25px", paddingBottom:"1em"}}>
        <Typography textAlign='center' color='#151A2E' fontWeight='700'>Westlands, Nairobi, Kenya.</Typography>
        <Toolbar sx={{alignItems:"center", justifyContent:"center", gap:"1em"}}>
            <img src={Facebook} style={{width:"40px"}}/>
            <img src={Twitter} style={{width:"40px"}}/>
            <img src={Tiktok} style={{width:"40px"}}/>
            <img src={SnapChat} style={{width:"40px"}}/>
        </Toolbar>
        <Toolbar sx={{alignItems:"center", justifyContent:"center", gap:"1.5em"}}>
            <Typography textAlign='center' color='#151A2E' fontWeight='700'>Home</Typography>
            <Typography textAlign='center' color='#151A2E' fontWeight='700'>About</Typography>
            <Typography textAlign='center' color='#151A2E' fontWeight='700'>Categories</Typography>
            <Typography textAlign='center' color='#151A2E' fontWeight='700'>Apply</Typography>
        </Toolbar>
    </div>
  )
}

export default Footer