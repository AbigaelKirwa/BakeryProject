import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const StarRating = () => {
  return (
    <div style={{paddingTop:"5%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center",  gap:"3%"}}>
        <StarIcon sx={{color:"#ECC051"}}/>
        <StarIcon sx={{color:"#ECC051"}}/>
        <StarIcon sx={{color:"#ECC051"}}/>
        <StarIcon sx={{color:"#ECC051"}}/>
        <StarBorderIcon sx={{color:"#ECC051"}}/>
    </div>
  )
}

export default StarRating