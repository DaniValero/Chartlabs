import React from 'react';
import './global.css'
import {Link} from 'react-router-dom'
import Img from '../Chartlabs.png'

const Header = () => {
    return (
        <nav className='menu'>
            {/* <img src='./nasa-logo.png' alt="nasa logo"/> */}
            <Link to={`/`} className='navbar-link'><img src={Img} alt="Web logo" className='logo-header'/></Link>
            
                <div className='wrapper-header'>
                    <Link to={`/`} className='navbar-link'>Home</Link>
                    <Link to={`/noticias`} className='navbar-link'>Noticias</Link>
                    <Link to={`/registro`} className='navbar-link'>Login</Link>
                </div>
        </nav>
        
    )
}

export default Header