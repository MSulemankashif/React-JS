import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

function Menu() {

    const [recipeList, setRecipeList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    // api fetching
    async function loadRecipes() {
        try {
            setLoading(true)
            var response = await fetch("https://dummyjson.com/recipes")
            if (!response.ok) throw new Error("Error while fetching")
            var data = await response.json()
            setRecipeList(data.recipes)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }

    }


    useEffect(
        () => { loadRecipes() },
        []
    )








    return (
        <>

            <Box
                display={"flex"}
                justifyContent={"center"}
                mt={5}
            >
                <Typography variant="h4" color="error">
                    Our Menu
                </Typography>

            </Box>

            <Grid container size="12" display={"flex"} justifyContent={"center"} gap={2}   >

                {
                    recipeList.map(
                        (recipe) => {
                            return (
                                <Grid
                                
                                item     

                                xs={12}  sm={6}  md={4} >

                                    <Card sx={{
                                        width:360,
                                        height: 350
                                    }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                
                                                image={recipe.image}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {recipe.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {recipe.difficulty}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {recipe.cuisine}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Share
                                            </Button>
                                        </CardActions>
                                    </Card>




                                </Grid>
                            )
                        }
                    )
                }



            </Grid>






        </>
    )
}

export default Menu