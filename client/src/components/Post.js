import React, {useState} from 'react'
import './global.css'
import { v4 as uuidv4 } from "uuid";
import {useParams} from 'react-router-dom'

const Post = ({noticia}) => {

    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    const [newPost, setNewPost] = useState({})
    const routeParams = useParams()

    const handleForm = (e) => {

        e.preventDefault()

        setNewPost({
            id_post: uuidv4(),
            title: title,
            content: content,
        })

        fetch(`http://www.localhost:5000/noticias/${routeParams.id_noticia}`, 
        
        {method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
        })
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // })
    }
    
    return (
        <>
        <div className='post-wrapper'>
            <h2 className='post-title'>Escribe un comentario</h2>
            
            <form className='post-form'>   
                <label>Título:</label> <input type="text" id="title" name="title" onChange={(e) => setTitle(e.currentTarget.value)}/>
                <label>Mensaje:</label> <textarea cols = "50" id="content" name="content" onChange={(e) => setContent(e.currentTarget.value)}/>
                <button className='form-button' onClick={(e) => handleForm(e)}>Enviar</button>
            </form>
        </div>
        </>
    )
}

export default Post