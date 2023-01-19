import React, {useState} from 'react'
import '../components/global.css'
import user from "../services/userService";
import AuthConsumer from "../hooks/useAuth";
import {Link, useNavigate} from 'react-router-dom'

const Logins = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [, dispatch] = AuthConsumer();

        let account = {
            email : email,
            password: password
        }

    const handleForm = async (e) => {
        e.preventDefault()
     
        const { isAdmin } = await user.login(account);

        dispatch({ type: isAdmin ? "admin" : "login" });
        navigate("/")
    }
    
    return (

        <>
        <div className='login-wrapper'>
            <h2 className='login-title'>Accede a tu cuenta</h2>
            
            <form className='login-form'>   
                <label>Email:</label> <input type="email" id="email" name="email" onChange={(e) => setEmail(e.currentTarget.value)}/>
                <label>Contraseña:</label> <input type="password" id="password" name="password" onChange={(e) => setPassword(e.currentTarget.value)}/>
                <button className="cssbuttons-io-button" onClick={(e) => handleForm(e)}> Login
                <div className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                </div>
                </button>
            </form>
        </div>
        <div className='registro-link-wrapper'>
            <h2><Link to={`/registro`} className='registro-link'>¿No tienes cuenta? Regístrate aquí</Link></h2>
        </div>
 
        </>
    )
}


export default Logins