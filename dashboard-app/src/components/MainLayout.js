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
        <div className='main_content'>
          <div className='layout_header'>
            <h4>Sales Dashboard</h4>
            <div className='icon_container'>
              <i className='icon light'></i>
              <i className='icon notif'></i>
            </div>
          </div>

          <div className='content_container first'>
            
            <div className='numbers_container'>

              <div className='number_container'>
                <span className='number_container_title'>Total revenue</span>
                <div className='inner_number_container'>
                  <span className='main_numbers'>$203.378</span>
                  <span className='side_numbers'>+6,32%</span>
                </div>
              </div>

              <div className='number_container'>
                <span className='number_container_title'>Total costumer</span>
                <div className='inner_number_container'>
                  <span className='main_numbers'>$55.544</span>
                  <span className='side_numbers'>+3,54%</span>
                </div>
              </div>

              <div className='number_container'>
                <span className='number_container_title'>Total profit</span>
                <div className='inner_number_container'>
                  <span className='main_numbers'>$333.653</span>
                  <span className='side_numbers'>+8,12%</span>
                </div>
              </div>

            </div>
          </div>

          <div className='content_container second'>

          </div>
        </div>

        <div className='side_content'>
          <h5>Costumer by Country</h5>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
