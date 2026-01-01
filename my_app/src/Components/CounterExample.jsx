import React, { useState } from 'react'

function CounterExample() {

  var [counter,   setCount] = useState(0)


  function increment(){ setCount( counter+1  ) }

  function incrementAfter10seconds(){
    setTimeout(
  
      ()=>{   setCount(  (counter)=> counter+5  )   },
      10000

    )
  }

  function reset(){ setCount( counter = 0  ) }

  function decrement(){
    if (counter > 0) {
        setCount( counter-1  ) 
    }
    else{
         alert("Cannot be negative")
    }
  }
  
  return (
    <>

    <h1>{counter}</h1>


    <br />

    <button
     onClick={increment}
    >
        Increment
    </button>




    <button
     onClick={incrementAfter10seconds}
    >
        Increment after 10 seconds
    </button>


    <button
     onClick={reset}
    >
        reset
    </button>


    <button
     onClick={decrement}
    >
        deccrement
    </button>


    
    
    </>
  )
}

export default CounterExample