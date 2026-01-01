import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  var {id} = useParams()

  var [recipe, setRecipe] = useState(null)
  var [loading, setLoading] = useState(false)


  async function loadRecipe(){
    try {
        setLoading(true)
        var response = await fetch(`https://dummyjson.com/recipes/${id}`)
        if (!response.ok) throw new Error("Error while loading")
        var data = await response.json()
        console.log(data)
        setRecipe(data)
    } catch (error) {
        console.log(error)
    } finally{
        setLoading(false)
    }
  }

  useEffect(
    ()=>{ loadRecipe() },
    []
  )


  return (
    <>
      <h1>THIS IS THE ID OF DISH : {id} </h1>
    
    </>
  )
}

export default Detail