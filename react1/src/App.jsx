     // Count App 

import React, { useState } from 'react'
import Todo from './components/todo';

function App() {
 var[a,b] = useState(0);
  return (
    <div>
      <div  className='count'>
        <h1>Count</h1>
         <h1>{a}</h1>
         <button onClick={() => b(a-1)}>Click me to decrease</button>
         <button onClick={() => b(0)}>Refresh</button>
         <button onClick={() => b(a+1)}>Click me to increase</button>
      </div>

      <Todo/>
    </div>
  )
}

export default App
