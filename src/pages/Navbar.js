import React, {useState, useEffect, useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'
import { Button } from '../pages/Button'
import './Navbar.css';
import schoolLogo from '../etherion.png'
import { AppContext } from '../Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar() {
    const history = useHistory();
    const {isAuth, userHasAuth, username, setUsername} = useContext(AppContext);
    const [click, setClick] = useState(false); //Initial value to pause
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {
        setClick(false)
    };

    const closeMobileMenuLogout = () => {
        userHasAuth(false);
        localStorage.removeItem('user');
        localStorage.setItem('isAuth', false);
        history.push("/login");
        setClick(false);
    };

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    function checkAuth(){
        //Data Persists
        if(localStorage.getItem("isAuth") && localStorage.getItem("user") != null){
            userHasAuth(true);
            //Set the username here
            setUsername(localStorage.getItem("user"));
        } 
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar" onLoad={checkAuth}>
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
                    {
                    isAuth ? (
                         <> 
                        {/* MOBILE LOGOUT */}
                        <li className="btn-mobile">
                        <Link
                            to='/login'
                            className='nav-links-mobile'
                            onClick={closeMobileMenuLogout}
                        >
                            Logout
                        </Link>
                        </li>  
                        {/* LOGOUT BUTTON */}
                        <li className='nav-links'> 
                            {username}
                        </li>
                        <li className="nav-item">
                            <Link to="/login" onClick={closeMobileMenuLogout}>
                                {button && <Button buttonSize="btn--medium" buttonStyle='btn--outline'>Logout</Button>}
                            </Link>
                        </li>
                        </>
                    ): ( 
                        <>
                        {/* MOBILE LOGIN */}
                        <li className="btn-mobile">
                        <Link
                            to='/login'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Login
                        </Link>
                        </li>  
                        {/* LOGIN BUTTON */}
                        <li className="nav-item">
                            <Link to="/login" onClick={closeMobileMenu}>
                        {button && <Button buttonSize="btn--medium" buttonStyle='btn--outline'>Login</Button>}
                            </Link>
                        </li>

                        {/* REGISTER BUTTON */}
                        <li className="nav-item">
                        <Link to="/register" onClick={closeMobileMenu}>
                        {button && <Button buttonSize="btn--medium" buttonStyle='btn--outline'>Register</Button>}
                        </Link>
                        </li>      
                        </>
                    )}                               
                </ul>
                </div>
        </nav>
        </>
    )
}

export default withRouter(Navbar)
