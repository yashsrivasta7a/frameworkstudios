import { useState } from 'react'

function Navbar() {

    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 200) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return (
        <nav
            className={
                colorChange
                    ? "navbar colorChange"
                    : "navbar"
            }
        >
            <div className='logo'>
                <h1>FRAMEWORK</h1>
            </div>
            <div className='navlinks'>
                <a href="">Home</a>
                <a href="">Work</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className='work-cta'>
                <button className="work-btn" role="button">Book us</button>

            </div>
        </nav>
    )
}

export default Navbar