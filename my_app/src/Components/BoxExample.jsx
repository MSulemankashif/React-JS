import React, { useState } from 'react'

function BoxExample() {


    var [boxColor, setBoxColor] = useState("lightblue")
  
    var boxStyle = {
        height: "200px",
        width: "200px",
        backgroundColor:  boxColor
    }



    function handleChange(color){
        setBoxColor(color)
    }


    return (


    <>
      
       <div style={boxStyle}  >

       </div>

       <button  onClick={  ()=>{  handleChange("lightblue")  }   }   >Light Blue</button>
       
       <button  onClick={  ()=>{  handleChange("red")  }   }   >Light Red</button>
       
       <button  onClick={  ()=>{  handleChange("purple")  }   }   >Light Purple</button>

    
    </>
  )
}

export default BoxExample