import React from 'react';
import './global.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className='menu'>
            {/* <img src='./nasa-logo.png' alt="nasa logo"/> */}
            <h1 className='h1-header'>ChartLabs</h1>
                <div className='wrapper-header'>
                <Link to={`/`} className='navbar-link'>Home</Link>
                </div>
        </nav>
        
    )
}

export default Header