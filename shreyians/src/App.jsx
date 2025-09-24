import React, { useState } from 'react'

function App() {
   const[a, setA] = useState(10);

   const changeA = () =>
   {
    console.log("chal gya")
    setA(20)
  }
   const submitHandler = (e) =>{
    e.preventDefault()
    console.log("submitted")
   }

  return (
 
    
    <div style={{color:'red',backgroundColor:'black', padding:'10px', margin:'10px'}}>
     <h1>Value of a is {a}</h1>
     <button onClick={changeA}>Change A</button>

      <form onSubmit={(e)=>{
        submitHandler(e)
       }}>
        <input type="text" placeholder='Enter text here'/>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
