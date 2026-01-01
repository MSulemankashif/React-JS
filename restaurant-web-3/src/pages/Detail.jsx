import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Box, CircularProgress } from '@mui/material'

function Detail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)

  async function loadRecipe() {
    try {
      var response = await fetch(`https://dummyjson.com/recipes/${id}`)
      if (!response.ok) throw new Error("Error while loading")
      var data = await response.json()

      setRecipe(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadRecipe()
  }, [id])


  if (loading) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={5} flexDirection="column">
        <Typography variant="h4" color="error" mb={3}>
          Loading Recipe...
        </Typography>
        <CircularProgress color='error' />
      </Box>
    )
  }

  if (!recipe) {
    return (
      <Typography variant='h5' color='error' mt={5}>
        Recipe not found!
      </Typography>
    )
  }

  return (
    <>
      <img src={recipe.image} alt="" />
      <h1>{recipe.name}</h1>
      
      <p>{recipe.instructions}</p>
    </>
  )
}

export default Detail
