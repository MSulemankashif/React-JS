import React from 'react'
import { Box, Typography, Button } from '@mui/material'


function Hero() {
  return (
    <Box
      sx={{
        height: "60vh",
        p: 3,
        bgcolor: "lightblue",
        gap:"20px",
        backgroundImage:`url('https://png.pngtree.com/background/20250103/original/pngtree-abstract-blur-coffee-shop-or-cafe-restaurant-interior-background-picture-image_15505814.jpg')`,
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"



      }}
    >

        <Typography variant="h3"  fontWeight={600} color="initial">Where every flavor tells a story</Typography>
        <Typography variant="h6" color="initial">A feast for the senses.</Typography>
        <Button variant="contained" color="error">
          Order Now
        </Button>




    </Box>
  )
}

export default Hero