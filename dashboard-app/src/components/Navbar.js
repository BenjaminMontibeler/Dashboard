import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='nav'>
            <div className='nav_top'>
                <img alt='logo'></img>
            </div>
            <div className='nav_content'>
                <div className='nav_content_items'>
                <h6 className='nav_content_title'>Main menu</h6>
                    <ul>
                        <li className='nav_item'> <i className='nav_icon'></i> <span className='nav_item_text'>Dashboard</span></li>
                        <li className='nav_item'> <i className='nav_icon'></i> <span className='nav_item_text'>Calendar</span></li>
                        <li className='nav_item'> <i className='nav_icon'></i> <span className='nav_item_text'>Statistics</span></li>
                        <li className='nav_item'> <i className='nav_icon'></i> <span className='nav_item_text'>Messages</span> 
                        <span className='nav_item_badge is-warning'>3</span> </li>
                        <li className='nav_item'> <i className='nav_icon'></i> <span className='nav_item_text'>Card</span> 
                         <span className='nav_item_badge is-primary'>New</span></li>
                    </ul>
                </div>

                <div className='nav_separator'>
                    <hr></hr>
                </div>

                <div className='nav_content_items'>
                <h6 className='nav_content_title'>Account</h6>
                    <ul>
                        <li className='nav_item'> <i></i> <span className='nav_item_text'>Help</span></li>
                        <li className='nav_item'> <i></i> <span className='nav_item_text'>Settings</span> 
                        <span className='nav_item_badge is-primary'>New</span> </li>
                    </ul>
                </div>

                <div className='nav_content_profile'>
                    <i className='nav_profile_pic'></i>
                    <div className='nav_profile_name'>
                        <span className='nav_item_text'>Kamandanu</span>
                        <span className='nav_item_text'>Manager</span>
                    </div>
                    <i className='nav_icon_open'></i>
                </div>

            </div>
        </nav>
  )
}

export default Navbar


