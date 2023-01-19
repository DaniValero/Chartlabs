import React, { useEffect, useState } from 'react'
import './global.css'
import Post from "./Post";
import {useParams} from 'react-router-dom'
import AuthConsumer from "../hooks/useAuth";   
import {Link} from 'react-router-dom'
import user from "../services/userService";


const Noticia = () => {

    const [noticia, setNoticia] = useState([])
    const routeParams = useParams()
    const [{ isAuth }] = AuthConsumer()

    useEffect(() => {
        const getNoticia = async () => {

            const resp = await fetch(`http://www.localhost:5000/noticias/${routeParams.id_noticia}`);
            const data = await resp.json();

            data.map((element) => (
                element.id_noticia === routeParams.id_noticia? setNoticia(element) : "Cargando..."
            ))
        }
        getNoticia()
    }, [])

    return (
        <>
     
        <div className='noticia-dinamica'>
            <h3 className='noticia-dinamica-title'>{noticia.title}</h3> 
            <img className='noticia-dinamica-img' src={noticia.img} alt="Imagen de la noticia"></img>                     
            <p className='noticia-dinamica-title'>{noticia.content}</p>
        </div>

        {isAuth && (<Post noticia={noticia}/>)}

        {!isAuth && (
        <div>
            <h3><Link to={`/login`} className='login-link'>Inicia sesión</Link> para dejar un comentario</h3>
        </div>)}

        <div className='comments-wrapper'>
            {noticia.posts? noticia.posts.map((e) => (
                
                <div className='comments' key={e.id_post}>
                    <div className='comment-header'><h4 className='comments-title'>{e.title}</h4> <p className='comment-author'>- Escrito por {user.getCurrentUser().username}</p></div>
                    <p className='comments-content'>{e.content}</p>
                </div>
            
            )) : "Cargando"}

        </div>

        </>
    )
}

export default Noticia