import { Box } from '@mui/material'
import React from 'react'

type centerType={
    children:React.ReactNode
}

const Center =({children}:centerType)=>{
    return(
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
            {children}
        </Box>
    )
}

export default Center