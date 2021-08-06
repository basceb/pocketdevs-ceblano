import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from '../pages/Button'
import './Navbar.css';
import schoolLogo from '../etherion.png'

function Navbar() {
    const [click, setClick] = useState(false); //Initial value to pause
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {
        setClick(false)
    };

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img src={schoolLogo} alt="Icon"/>
                <p className="navbar-name"><strong>Etherion University</strong></p>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {/* Ternary if condition */}
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                </div>
                    {/* Nav menu if condition */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {/* Nav menu items */}                   
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                            News
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/admissions' className='nav-links' onClick={closeMobileMenu}>
                            Admissions
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portal' className='nav-links' onClick={closeMobileMenu}>
                            Portal
                        </Link>
                    </li>
                    <li className="btn-mobile">
                        <Link
                            to='/login'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" onClick={closeMobileMenu}>
                     {button && <Button buttonSize="btn--medium" buttonStyle='btn--outline'>Login</Button>}
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/register" onClick={closeMobileMenu}>
                     {button && <Button buttonSize="btn--medium" buttonStyle='btn--outline'>Register</Button>}
                     </Link>
                    </li>           
                </ul>
                    
                    {/* {button && <Button buttonSize="btn--medium" buttonStyle='btn--outline'>Register</Button>} */}
                </div>
        </nav>
        </>
    )
}

export default Navbar
