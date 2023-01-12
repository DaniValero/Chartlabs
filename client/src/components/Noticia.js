import React, { useEffect, useState } from 'react'
import './global.css'
import Post from "./Post";
import {useParams} from 'react-router-dom'


const Noticia = ({props}) => {

    const [noticia, setNoticia] = useState([])
    const routeParams = useParams()


    useEffect(() => {
        const getNoticia = async () => {

            const resp = await fetch(`http://www.localhost:5000/noticias/${routeParams.id_noticia}`);
            console.log(resp)
            const data = await resp.json();
            
            setNoticia(data[0])
            console.log(noticia)
        }
        getNoticia()
    }, [])

    return (
        <>
     
        <div className='noticia'>
            <h3>{noticia.title}</h3>                      
            <p className='news-summary'>{noticia.content}</p>
        </div>


        {/* <Post/> */}
        </>
    )
}

export default Noticia