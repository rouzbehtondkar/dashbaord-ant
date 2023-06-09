import React from 'react'
import Logins from '../infrastructure/unauthorized/login/Logins'
import Regester from '../infrastructure/unauthorized/regester/Regester'
import Forget from '../infrastructure/unauthorized/forget/forget'
import { Route,Routes } from 'react-router-dom'

export default function RouteUnauthorized() {
  return (
    <Routes>
    
             <Route path="/" element={<Logins />} />
             <Route path="/regester" element={<Regester />} />
             <Route path="/forget" element={<Forget />} />
             <Route path='/*' element={<Logins/>}/>
       
    </Routes>
  )
}
