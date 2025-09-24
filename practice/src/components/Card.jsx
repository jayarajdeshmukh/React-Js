/* 2. This is card example


import React from 'react'
function Card(props) {
    console.log(props)
  return (
    <div className='bg-black mr-5 text-white p-6 rounded text-center inline-block'>
      <img className='h-32 w-32 ml-5 rounded-full mb-3' src='profilePhoto'/>
      <h1 className='text-2xl font-semibold mb-3'>{props.user}</h1>
       <h4 className='text-blue-700'>{props.profession}</h4>
      <h2>{props.city}, {props.age}</h2>
      <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friends</button>
    </div>
  )
}

export default Card
 */