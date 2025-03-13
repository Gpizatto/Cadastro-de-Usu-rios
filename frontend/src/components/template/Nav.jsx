import { Link } from 'react-router-dom'
import './Nav.css'
import React from 'react'


export default props =>
    <aside className='nav'>
        <nav className="menu">
            <Link to="/">
            <i className='fa fa-home'></i>Inicio
            </Link>
            <Link to="/users">
            <i className='fa fa-users'></i>Usuários
            </Link>
        </nav>
    </aside>