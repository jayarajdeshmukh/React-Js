/*   1.  This is props example 

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <nav className='flex justify-between py-3 px-8 bg-black text-white items-center'>
         <h2 className='text-xl'>Jay</h2>
         <div className='flex gap-8 items-center'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Services</h4>
         </div>
      </nav>
      <div>
        <Header a='Jay'/>
        <Header a='Jayraj'/>
        <Header a='Hey'/>
      </div>
        <Footer/>
    </div>
  )
}
export default App
    */


  /* 2. This is card example props  
   import React from 'react'
   import Card from './components/Card'
   
   function App() {
    const user = [
  {
    "name": "Jay Deshmukh",
    "city": "Pune",
    "age": 24,
    "profession": "Fullstack Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "name": "Neha Singh",
    "city": "Mumbai",
    "age": 27,
    "profession": "UI/UX Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    "name": "Rohan Patil",
    "city": "Bangalore",
    "age": 29,
    "profession": "Backend Engineer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    "name": "Aarav Sharma",
    "city": "Delhi",
    "age": 26,
    "profession": "Frontend Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    "name": "Priya Nair",
    "city": "Hyderabad",
    "age": 25,
    "profession": "Data Analyst",
    "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
  }
]


     return (
      <div>
       <div className='p-10'>
          {user.map(function(elem,idx){
            return <Card key={idx} profilePhoto={elem.profilePhoto} user={elem.name} profession={elem.profession} city={elem.city} age={elem.age}/>
          })}
        </div>
       </div>
     )
   }
   
   export default App
   
*/


  //3.  This is props another example (parent to child data transfer)
  import React from 'react'
  import Ex1 from './components/Ex1'
  
  const App = () => {
    return (
      <div>

        <Ex1 name="Jayaraj"/>
      </div>
    )
  }
  
  export default App
   
