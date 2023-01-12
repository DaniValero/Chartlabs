import React, {useState, useEffect} from 'react'
import './global.css'

import { v4 as uuidv4 } from "uuid";

const Logins = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [newUser, setNewUser] = useState({})

    const handleForm = (e) => {
        e.preventDefault()
        setNewUser({
            id: uuidv4(),
            name: username,
            email: email,
            password: password,
        })

    }
    
    return (
        <>
        <div className='login-wrapper'>
            <h2 className='login-title'>Login</h2>
            
            <form className='login-form'>   
                <label>Nombre de usuario:</label> <input type="text" id="username" name="username" onChange={(e) => setUsername(e.currentTarget.value)}/>
                <label>Email:</label> <input type="email" id="email" name="email" onChange={(e) => setEmail(e.currentTarget.value)}/>
                <label>Contraseña:</label> <input type="password" id="password" name="password" onChange={(e) => setPassword(e.currentTarget.value)}/>
                <button className='form-button' onSubmit={(e) => handleForm(e)}>Enviar</button>
            </form>
        </div>
        </>
    )
}

export default Logins