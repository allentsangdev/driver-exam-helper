import React from 'react'
import { useAuth } from '../contexts/AuthContext' 
import {Route} from 'react-router-dom'
import Navbar from './Navbar'

export default function PrivateRoute({component: Component, ...rest}) {
    const {currentUser} = useAuth()

    return currentUser ? <Component/> : <Navbar/>
    }
    
