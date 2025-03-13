import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../components/home1/Home'
import UserCrud from '../components/users/UserCrud'

export default props => 
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/users' element={<UserCrud/>} />
        <Route from='*' element={<Home/>} />
    </Routes>

