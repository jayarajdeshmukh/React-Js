import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
  <div className='dashboard'>
    <div className='sidebar'>
        <h2>Dashboard</h2>
        <ul>
          <li>🏠 Home </li>
          <li>👤 Profile</li>
          <li>📊 Reports</li>
          <li>⚙️ Setting</li>
          <li>🔔 Notification</li>
          <Link to='/Login' style={{ color: "white", textDecoration: "none" }}>🚪Logout</Link>
        </ul>
    </div>

      <div className='main-card'>
        <div className='header'>
          <h1>Welcome to Dashboard 🎨</h1>
        </div>
        <div className='cards'>
             <div className='card'><h3>1200</h3><b>Total users</b></div>
             <div className='card'><h3>$5600</h3><b>Total revenue</b></div>
             <div className='card'><h3>250</h3><b>Total orders</b></div>
             <div className='card'><h3>95%</h3><b>Growth Rate</b></div>
             <div className='card'><h3>2500+</h3><b>New customer</b></div>
             <div className='card'><h3>98%</h3><b>Customer Satisfaction</b></div>
        </div>
        <div className='userlist'>
          <h1>User List</h1>
          <table>
            <thead>
              <tr>
                 <th>Name</th>
                 <th>Email</th>
                 <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Jay</td><td>jay2020@gmail.com</td><td>Active</td></tr>
              <tr><td>Jayraj</td><td>jayraj2020@gmail.com</td><td>Inactive</td></tr>
              <tr><td>Sudip</td><td>Sudip3452@gmail.com</td><td>Pending</td></tr>
              <tr><td>Mahadev</td><td>Mahadev9416@gmail.com</td><td>Active</td></tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
  )
}

export default Dashboard
