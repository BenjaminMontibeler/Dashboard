import React from 'react'
import "./MainLayout.css"

export default function MainLayout() {
  return (
    <div className='layout'>
      <div className='layout_nav'>
        <nav className='navbar'>
            <div>
                <h2>Finsally.</h2>
            </div>
            <div className='nav_content'>
                <div className='nav_content_one'>
                Main menu
                    <ul>
                        <li>Dashboard</li>
                        <li>Calendar</li>
                        <li>Statistics</li>
                        <li>Messages</li>
                        <li>Card</li>
                    </ul>
                </div>

                <div>
                Account
                    <ul>
                        <li>Account</li>
                        <li>Settings</li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>

      <div className='layout_content'>

      </div>
    </div>
  )
}
