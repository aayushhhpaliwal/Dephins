import React from 'react'
import "../App.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Navbar() {
  return (

    <div className='Navbar'>
     <div>
    <h2 className="head">Medical Darpan</h2>
     </div>
    <div className="NavLinks">
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Distributor</li>
        <li>Manufactures</li>
        <li>About us</li>
        <li>Blog</li>
      </ul>
    </div>
    <div className="Login">
    <ul>
        <li>Login</li>
        <li><AccountCircleIcon /></li>
        </ul>
        </div>
    </div>
 
  )
}

export default Navbar