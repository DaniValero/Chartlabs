import React from 'react';
import './global.css'
import {Link, NavLink} from 'react-router-dom'
import Img from '../Chartlabs.png'
import AuthConsumer from "../hooks/useAuth";

const Header = () => {

    const [{ isAuth }] = AuthConsumer();


    return (
        <nav className='menu'>
            <Link to={`/`} className='navbar-link'><img src={Img} alt="Web logo" className='logo-header'/></Link>
            
                <div className='wrapper-header'>
                    <NavLink to={`/`} className='navbar-link'>Home</NavLink>
                    <NavLink to={`/noticias`} className='navbar-link'>Noticias</NavLink>
                    {!isAuth && (
                        <>
                        <NavLink className="navbar-link" to="/login">
                            Login
                        </NavLink>
                        <NavLink className="navbar-link" to="/registro">
                            Registro
                        </NavLink>
                        </>
                    )}
                    {isAuth && (
                        <NavLink className="navbar-link" to="/logout">
                        Logout
                        </NavLink>
                    )}
                </div>
        </nav>
        
    )
}

export default Header