import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const StarRating = () => {
  return (
    <div style={{paddingTop:"5%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center",  gap:"3%"}}>
        <StarIcon sx={{color:"#DAA214"}}/>
        <StarIcon sx={{color:"#DAA214"}}/>
        <StarIcon sx={{color:"#DAA214"}}/>
        <StarIcon sx={{color:"#DAA214"}}/>
        <StarBorderIcon sx={{color:"#DAA214"}}/>
    </div>
  )
}

export default StarRating