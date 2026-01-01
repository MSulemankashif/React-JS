import React, { useState } from 'react'

function ControlledExample() {

    var [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password: ""
    })
    
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

  return (
    <>


    <form  onSubmit={handleSubmit}    action="">

        <input
          type="text"
          name = "first_name"
          placeholder= 'Enter First Name'
          value = {formData.firstName}  
          onChange={  (input)=>{
            setFormData( { ...formData  ,firstName :  input.target.value   }  )
            
          }}
        />

        <br />

        <input
          type="text"
          name = "last_name"
          placeholder= 'Enter Last Name'
          value = {formData.lastName}  
          onChange={  (input)=>{
            setFormData( {  ...formData   ,lastName :  input.target.value   }  )
          }}
        />


        <br />

        <input
          type="text"
          name = "email"
          placeholder= 'Enter Email'
          value = {formData.email}  
          onChange={  (input)=>{
            setFormData( { ...formData    ,  email :  input.target.value   }  )
          }}
        />


        <br />

        <input
          type="password"
          name = "password"
          placeholder= 'Enter Password'
          value = {formData.password}  
          onChange={  (input)=>{
            setFormData( { ...formData   ,password :  input.target.value   }  )
          }}
        />

        <br />

        <button type='submit'>submit form</button>


        <br />
        <br />

    </form>
    
    </>
  )
}

export default ControlledExample