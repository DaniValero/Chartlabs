import React, { useEffect, useState } from 'react'
import '../components/global.css'
import axios from "axios"
import { Link } from 'react-router-dom'

const Noticias = () => {

    const [news, setNews] = useState([])

    useEffect(()  => {
      const findNews = async () => {

        const resp = await fetch(`http://www.localhost:5000/noticias/findNews`);
        const data = await resp.json();
        console.log(data)
    }
      const getNews = async () => {

          const resp = await fetch(`http://www.localhost:5000/noticias`);
          const data = await resp.json();
          setNews(data)
      }
      
      findNews() && getNews()

       
    }, [])



    return (
        <>
            

            <div className='news-wrapper'>
            <h2 className='news-wrapper-title'>Noticias</h2>
            <hr className="rounded"></hr>   
            {news.length? news.reverse().map((e) => (
              
              <div className='noticia' key={e.id_noticia}>
                  <Link to={`/noticias/${e.id_noticia}`} className='news-title'>{e.title}</Link>   
                  <div className='img-wrapper'>
                  <img className= 'noticias-img' src={e.img} alt="imagen de la noticia"></img>                   
                  <p className='news-summary'>{e.content}</p>
                  </div>
              </div>
              
                
            )): <p>Cargando...</p>
            }
            </div>
            
                    
                
        </>
    )

}


export default Noticias