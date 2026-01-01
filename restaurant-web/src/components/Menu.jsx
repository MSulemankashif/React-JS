import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Grid, Pagination, CircularProgress } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';

function Menu() {

    var navigate =  useNavigate()

    const [recipeList, setRecipeList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const perPageItem = 6


    var totalPages = Math.ceil(  recipeList.length / perPageItem  ) //  30 / 6 = 5

    var currentPageRecipes = recipeList.slice(
        (currentPage-1) * perPageItem,  // (2-1) * 6 = 6
        currentPage * perPageItem // 2 * 6 = 12
    )





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


    if (loading) {
        return (
            <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} mt={5} >

            <Typography variant="h4" color="error" mb={5}>
                    Our Menu
                </Typography>

                <CircularProgress  color='error' />



        </Box>
        )
    }








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
                    currentPageRecipes.map(
                        (recipe) => {
                            return (
                                <Grid
                                
                                item     

                                xs={12}  sm={6}  md={4} >

                                    <Card sx={{
                                        width:360,
                                        height: 320
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
                                            <Button 
                                             variant='contained'  
                                             color="error"
                                             onClick={()=>{navigate(`/dish/${recipe.id}`)}}
                                            >
                                                See Details
                                            </Button>
                                        </CardActions>
                                    </Card>


                                </Grid>
                            )
                        }
                    )
                }



            </Grid>

            {/* PAGINATION */}
            <Box display={"flex"}  justifyContent={"center"} alignItems={"center"} m={5}  >
                <Pagination
                  count= {totalPages}
                  page= {currentPage}
                  onChange={ (event, page)=>{  setCurrentPage(page)  } }
                  color='error'
                
                />
            </Box>
        </>
    )
}

export default Menu