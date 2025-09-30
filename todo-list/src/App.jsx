import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const[mainTask, setMainTask ] = useState([]);
  const submitHandler=(e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {task}])
    setTask("")
    console.log(mainTask)
  }
  
   const deleteHandler = (i) =>{
     let copytask = [...mainTask]
     copytask.splice(i,1)
      setMainTask(copytask)
     }
   

  let renderTask=<h2>No task available</h2>
    if(mainTask.length>0){
  renderTask = mainTask.map((t,i) => {
    return( 
    <div key={i} className="flex justify-between">
         <h3 className="text-2xl font-semibold">{t.task}</h3>
         <button onClick={()=>deleteHandler(i)} className="bg-red-400 p-2 text-white rounded font-bold mb-2">Delete</button>
    </div>
    );
  })
}
      return (
    <div>
      <h1 className="bg-black text-white text-center text-5xl font-bold p-5">
        To-do List
      </h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Add a new task..."
            className="input"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button type="submit">Add</button>
        </form>
        <div className="p-8 bg-slate-200">
           <ul>
              {renderTask}
           </ul>
        </div>
      </div>
  );
}
