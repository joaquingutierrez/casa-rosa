import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='bodyNav'>
            <nav className='flex justify-between'>
                <Link>
                    HOME
                </Link>
                <Link>
                    NOSOTROS
                </Link>
                <Link>
                    PRODUCTOS
                </Link>
            </nav>
        </div>

    )
}

export default NavBar