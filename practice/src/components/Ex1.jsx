import React from 'react'
import Ex2 from './Ex2'

const Ex1 = (props) => {
  return (
    <div>
       <h1>My name is {props.name}</h1>
       <Ex2 user="Jay"/>
    </div>
  )
}

export default Ex1
