import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <h1>FRAMEWORK</h1>
            </div>
            <div className='navlinks'>
                <a href="">Home</a>
                <a href="">Work</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className='work-btn'>
                <a href="">Hire Us</a>
            </div>
        </nav>
    )
}

export default Navbar