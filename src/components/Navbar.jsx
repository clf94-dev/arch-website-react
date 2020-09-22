import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Logo from './images/logo.svg'
import './styles/App.scss'
function Navbar() {

    const [click,
        setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-cont">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
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
                        
                        <Link to='/portfolio' className='nav-links'onClick={closeMobileMenu} > Portfolio </Link></li>
                    <li className="nav-item"><Link to='/about' className='nav-links'onClick={closeMobileMenu} >About Us</Link></li>
                    <li className="nav-item"><Link to='/contact' className='nav-links'onClick={closeMobileMenu} >Contact</Link></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
