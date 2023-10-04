import React from 'react';
import './NavBar.css'
import {  Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <nav className='flex content-between'>
                <Link>
                    HOME
                </Link>
                <Link>
                    NOSOTROS
                </Link>
                <h1>
                    Hola soy el navbar
                </h1>
            </nav>
        </div>

    )
}

export default NavBar