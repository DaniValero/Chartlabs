import React from 'react'
import '../components/global.css'
import Noticia from '../components/Noticia'
// import Posts from '../components/Posts'
import {useParams} from 'react-router-dom'

const NoticiaD = () => {

    let { id_noticia } = useParams()
    
    return (
        <>
            <Noticia path = ":id_noticia" />
            {/* <Posts /> */}
        </>
    )

}
export default NoticiaD