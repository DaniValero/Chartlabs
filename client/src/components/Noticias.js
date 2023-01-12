import React, { useEffect, useState } from 'react'
import './global.css'
import { Link } from 'react-router-dom'

const Noticias = () => {

    const [news, setNews] = useState([])
    const [props, setProps] = useState({})

    useEffect(() => {

        const getNews = async () => {

            const resp = await fetch(`http://www.localhost:5000/noticias`);
            console.log(resp)
            const data = await resp.json();
            console.log(data)
            setNews(data)
        }
        getNews()

       
    }, [])

    const handleProps = (e) => {
        setProps(e)
    }


    return (
        <>
            

            <div className='news-wrapper'>
            <h2 className='news-wrapper-title'>Noticias</h2>
            <hr class="rounded"></hr>   
            {news.length? news.map((e) => (
                <>
                <div className='noticia' key={e.id_noticia}>
                    <Link to={`/noticias/${e.id_noticia}`} className='news-title' props={props} onClick = {(e) => {handleProps(e)}}>{e.title}</Link>                      
                    <p className='news-summary'>{e.content}</p>
                </div>
                </>
                
            )): <p>Cargando...</p>
            }
            </div>
            
                    
                
        </>
    )

}


export default Noticias