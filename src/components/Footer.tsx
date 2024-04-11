import React from 'react'
import { Toolbar, Typography } from '@mui/material'
import Facebook from '../assets/images/footer/facebook.png'
import Twitter from '../assets/images/footer/Twitter.png'
import TikTok from '../assets/images/footer/TikTok.png'
import SnapChat from '../assets/images/footer/Snapchat.png'

const Footer = () => {
  const socialMediaIcons = [Facebook, Twitter, TikTok, SnapChat]
  const footerLinks = ['Home', 'About', 'Categories', 'Apply']
  return (
    <div style={{background:"#D9D9D9", paddingTop:"25px", paddingBottom:"1em"}}>
        <Typography textAlign='center' color='#151A2E' fontWeight='700'>Westlands, Nairobi, Kenya.</Typography>
        <Toolbar sx={{alignItems:"center", justifyContent:"center", gap:"1em"}}>
          {socialMediaIcons.map((socialMediaIcon)=>(
            <img key={socialMediaIcon} src={socialMediaIcon} style={{width:"35px"}}/>
          ))}
        </Toolbar>
        <Toolbar sx={{alignItems:"center", justifyContent:"center", gap:"1.5em"}}>
          {footerLinks.map((footerLink)=>(
            <Typography key={footerLink} textAlign='center' color='#151A2E' fontWeight='700'>{footerLink}</Typography>
          ))}
        </Toolbar>
    </div>
  )
}

export default Footer