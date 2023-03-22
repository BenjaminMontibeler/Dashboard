import React from 'react'
import "./MainLayout.css"
import "./BaseReset.css"
import "./BaseTypography.css"
import Navbar from './Navbar'

function MainLayout() {
  return (
    <div className='layout'>
      <div className='layout_nav'>
        <Navbar />
      </div>

      <div className='layout_content'>
        <h3>Sales Dashboard</h3>
      </div>
    </div>
  )
}

export default MainLayout
