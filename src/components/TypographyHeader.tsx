import React from 'react'
import { Typography } from '@mui/material'
import { typographyType } from '../@types/types'



const TypographyHeader = ({children}:typographyType) => {
  return (
    <Typography textAlign="center" variant='h1' fontWeight="bold" fontSize="65px" pt='15px'>
        {children}
    </Typography>
  )
}

export default TypographyHeader