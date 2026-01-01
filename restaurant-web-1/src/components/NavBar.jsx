import React, { use, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Button, IconButton, useTheme, useMediaQuery, Drawer, Paper } from '@mui/material'
import { MenuOutlined, } from '@mui/icons-material'

function NavBar() {

    var [drawerOpen, setDrawerOpen] = useState(false)
    var theme = useTheme()
    var isMobile = useMediaQuery(theme.breakpoints.down('sm'))


    return (
        <>

            <AppBar position="static" color="error" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" flexGrow={1}  >
                        MyRestaurant
                    </Typography>

                    {/* links */}

                    {
                        isMobile == false
                            ? <Box display={"flex"} gap={3}>

                                <Button variant="text" color="white">
                                    Home
                                </Button>

                                <Button variant="text" color="white">
                                    About
                                </Button>


                                <Button variant="text" color="white">
                                    Contact
                                </Button>


                                <Button variant="outlined" color="white">
                                    Register
                                </Button>
                            </Box>


                            : <IconButton onClick={()=>{setDrawerOpen(true)}}>
                                <MenuOutlined sx={{ color: "white" }} />
                            </IconButton>
                    }

                </Toolbar>
            </AppBar>

            {/* DRAWER */}

            <Drawer 
              open={drawerOpen}
              onClose={()=>{  setDrawerOpen(!drawerOpen)  }}
              anchor="right"
            >

                <Paper
                  sx={{
                    height:"100%",
                    width: "200px"
                  }}
                >

                    <Box 
                      display={"flex"}  
                      textAlign={"start"}  
                      alignItems={"center"} 
                      flexDirection={"column"} 
                      margin={0}  
                    >
                                <Button variant="text" color="white">
                                    Home
                                </Button>

                                <Button variant="text" color="white">
                                    About
                                </Button>


                                <Button variant="text" color="white">
                                    Contact
                                </Button>


                                <Button variant="text" color="white">
                                    Register
                                </Button>
                            </Box>
                </Paper>
            </Drawer>
        </>
    )
}

export default NavBar