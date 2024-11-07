import React, { useState, useEffect } from 'react'; // Single import statement for React and useState
import { Button } from './Button';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick (!click);
    const closeMobileMenu = () => setClick (false);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect (() => {
        showButton()
    },[ ]);

    window.addEventListener('resize', showButton);

    
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
                    SriLankan AirLines
                </Link>
                <div className='menu-icon' onClick={handleClick}> 
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                {/*unsorted list*/}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {/*list item*/}
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/user-manual' className='nav-links' onClick={closeMobileMenu}>
                            User Manual
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/maintenance-manual' className='nav-links' onClick={closeMobileMenu}>
                            Maintenance Manual
                        </Link>
                    </li> 
                </ul>
                {button && <Button buttonStyle='btn--outline'>MONITOR</Button>} 
            </div>
        </nav>
    </>
  )
}

export default Navbar
