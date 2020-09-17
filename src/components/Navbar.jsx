import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Logo from './images/logo.svg'
import './styles/App.scss'
function Navbar() {

    const [click,
        setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="navbar-cont">
                <Link to='/' className='navbar-logo'>
                <img src={Logo} alt="arch" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i
                        className={click
                        ? 'fas fa-times'
                        : 'fas fa-bars'}></i>
                </div>
                <ul
                    className={click
                    ? 'nav-menu active'
                    : 'nav-menu'}>
                    <li className="nav-item">
                        
                        <Link to='/portfolio' className='nav-links' > Portfolio </Link></li>
                    <li className="nav-item"><Link to='/about' className='nav-links' >About Us</Link></li>
                    <li className="nav-item"><Link to='/careers' className='nav-links' >Careers</Link></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
