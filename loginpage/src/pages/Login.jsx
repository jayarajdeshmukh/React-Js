import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {
   const[username, setUsername] = useState('');
   const[password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleLogin = (e) => {
    e.preventDefault();
    if(username === 'admin' && password ==='1234'){
        navigate('/Dashboard');
    }else {
        alert('Invalid Credentials');
    }
   }
  return (
    <div className="login-container"> 
       <div className="circles"></div>
       <form className="login-form" onSubmit={handleLogin}>
       <h2>Login</h2>
       <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
     
     <button type="submit">Login</button>
     </form>
    </div>
  )
}
