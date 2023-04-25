import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className=' flex items-start space-x-4'>
      <Sidebar/>
      <Outlet/>
       
    </div>
  )
}

export default Body
