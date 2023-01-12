import React, { useEffect, useState } from 'react'
import './global.css'

const Noticias = () => {

    const [news, setNews] = useState([])

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


    

    return (
        <>
            <div className='news-title'>Noticias</div>

            {news.length? news.map((e) => (

                <div>
                <h3>{e.title}</h3>
                    
                    <p className='news-summary'>{e.content}</p>
                </div>

                
            )): <p>Cargando...</p>
            }
            
                    
                
        </>
    )

}


export default Noticias