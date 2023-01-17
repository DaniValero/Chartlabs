import React, { useEffect, useState } from 'react'
import './global.css'
import Post from "./Post";
import {useParams} from 'react-router-dom'


const Noticia = () => {

    const [noticia, setNoticia] = useState([])
    const routeParams = useParams()

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

        
        <Post noticia={noticia}/>

        <div className='comments-wrapper'>
            {noticia.posts? noticia.posts.map((e) => (
                
                <div className='comments' key={e.id_post}>
                    <h4 className='comments-title'>{e.title}</h4>
                    <p className='comments-content'>{e.content}</p>
                </div>
            
            )) : "Cargando"}

        </div>

        </>
    )
}

export default Noticia