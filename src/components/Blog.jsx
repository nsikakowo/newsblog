import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BASE_API_URL = "https://dummyjson.com/"


const Post =({text, title, image, link})=>{
    return(
        <section className='my-[30px]'>
        <h1 className='text-[30px]' >{title}</h1>
        <div>
            <img src={image} alt={title} />
        </div>
        <p>{text}</p>
        <Link to={`/technews/${link}`} >Read more... </Link>
    </section>
    )
}

const Blog = () => {
    const [blogPost, setblogPost] = useState([])

    useEffect(() => {
        axios.get(BASE_API_URL + 'products/')
        .then((res)=>{
            console.log(res)
            const allPost = res.data.products;
            setblogPost(allPost)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])


  return (
    <section>
        {
            blogPost.map(post => (
                <Post 
                key={post.id}
                    text={post.description}
                    title={post.title}
                    image={post.thumbnail}
                    link={post.id}
                />
            ))
        }
    </section>
  )
}

export default Blog