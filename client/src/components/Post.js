import React, {useState, useEffect} from 'react'
import './global.css'

import { v4 as uuidv4 } from "uuid";

const Post = () => {

    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    const [newPost, setNewPost] = useState({})

    const handleForm = (e) => {
        e.preventDefault()
        
        setNewPost({
            id_post: uuidv4(),
            title: title,
            content: content,
        })

    }
    
    return (
        <>
        <div className='post-wrapper'>
            <h2 className='post-title'>Escribe un comentario</h2>
            
            <form className='post-form'>   
                <label>Título:</label> <input type="text" id="title" name="title" onChange={(e) => setTitle(e.currentTarget.value)}/>
                <label>Mensaje:</label> <textarea cols = "50" id="content" name="content" onChange={(e) => setContent(e.currentTarget.value)}/>
                <button className='form-button' onSubmit={(e) => handleForm(e)}>Enviar</button>
            </form>
        </div>
        </>
    )
}

export default Post