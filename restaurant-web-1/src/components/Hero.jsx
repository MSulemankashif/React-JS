import { Box, Typography } from '@mui/material'
import React from 'react'

function Hero() {
  return (
    <>
      <Box
        sx={{
            height:"80vh",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            backgroundImage: `url('https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg')`
        }}
        
      >

        <Typography variant="h4" color="white">
            Where every flavor tells a story.
        </Typography>


        <Typography variant="body1" color="white">
            Low cost. High quality.
        </Typography>


      </Box>
    </>
  )
}

export default Hero