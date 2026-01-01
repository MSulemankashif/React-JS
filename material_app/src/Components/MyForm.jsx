import React from 'react'
import {Box, Paper, Typography, TextField, Button} from '@mui/material'

function MyForm() {
  return (
    <>
        <Paper
        sx={{
                margin: "24px auto",
                maxWidth: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 4
            }}>

                <Typography variant="h3" color="success" gutterBottom>
                    Register Now
                </Typography>
            

            <Box>
                <TextField
                  variant='outlined'
                  id=""
                  required
                  label="Name"
                  fullWidth
                  sx={{margin:"12px auto"}}
                  autoFocus
                />

                <TextField
                  variant='outlined'
                  id=""
                  type='email'
                  required
                  label="Email"
                  fullWidth
                  sx={{margin:"12px auto"}}
                />

                <TextField
                  id=""
                  variant='outlined'
                  label="Password"
                  type='password'
                  fullWidth
                  required
                  sx={{margin: "12px auto"}}
                />

                <Button variant="contained" color='primary' fullWidth sx={{margin: "12px auto"}}>Create Account</Button>
            </Box>
        </Paper>
    </>
  )
}

export default MyForm