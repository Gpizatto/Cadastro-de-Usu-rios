import './Logo.css'
import logo from '../../Assets/images/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className='logo'>
        <Link to="/" className="log">
        <img src={logo} alt="logo" />
        </Link>
    </aside>