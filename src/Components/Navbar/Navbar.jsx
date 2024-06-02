import './Navbar.css'
import Logo from '../../assets/logo.jpg'

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='navlinks'>
                    <a href="#landing">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar