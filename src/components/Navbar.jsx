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
                <img src={Logo} alt="arch" />
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
                    <li className="nav-item">Portfolio</li>
                    <li className="nav-item">About Us</li>
                    <li className="nav-item">Careers</li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
