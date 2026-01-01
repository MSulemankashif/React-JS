import React, { useState } from 'react'

function PasswordExample() {

  var [isHidden, setIsHidden] =  useState(true)


  return (
    <>
      <input 
         type= {isHidden? "password" : "text" }   
         placeholder='Enter Password'
      />

      <button
        onClick={ ()=>{  setIsHidden(!isHidden)   }   }  
      >
        {isHidden? "Show 👀"  : "Hide 🙈"}
      </button>


    </>
  )
}

export default PasswordExample