import React, {useState} from 'react'
import '../components/global.css'
import user from "../services/userService";


const Registro = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let account = {
        username: username,
        email : email,
        password: password
    }

    const handleForm = async (e) => {
    
    e.preventDefault()
    console.log(account)

    await user.register(account)
    }

  return (
    <>
        <div className='login-wrapper'>
            <h2 className='login-title'>Crea una cuenta nueva</h2>
            
            <form className='login-form'>

                <label>Nombre de usuario:</label> <input type="text" id="username" name="username" onChange={(e) => setUsername(e.currentTarget.value)}/>

                <label>Email:</label> <input type="email" id="email" name="email" onChange={(e) => setEmail(e.currentTarget.value)}/>

                <label>Contraseña:</label> <input type="password" id="password" name="password" onChange={(e) => setPassword(e.currentTarget.value)}/>

                <button className="cssbuttons-io-button" onClick={(e) => handleForm(e)}> Enviar

                <div className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                </div>
                </button>
            </form>
        </div>
    </>
    );
}

export default Registro;