import React, { useState } from 'react'

export default function App() {
  let[a,b] = useState(0);

  return (
    <div>
      <h1 className='italic text-6xl'>Counter App</h1>
<div>
     <h1 className='font-bold text-5xl'>{a}</h1>
       <button onClick={()=>b(a-1)}>Click me decrese</button>
      <button onClick={()=>b(0)}>Neutral</button>
      <button onClick={()=>b(a+1)}>Click me Increase</button>
    </div>
</div>

  )
}
