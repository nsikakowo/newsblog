import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BASE_API_URL = "https://dummyjson.com/"


const Post =({text, title, image, link})=>{
    return(
        <section className='my-[30px] mx-[10px] w-[450px] flex flex-col items-center bg-[#f7f7f7] rounded-[4px] pb-3 bShadow'>
        <div className='w-[300px] h-[300px] mt-[30px]'>
            <img src={image} alt={title} className="object-cover w-[100%] h-[100%]" />
        </div>
        <h1 className='text-[25px] font-bold my-[20px]' >{title}</h1>
        <p className='w-[90%] text-center' >{text}</p>
        <Link to={`/technews/${link}`} className='text-[#FFB72B] hover:font-bold duration-[2000ms] hover:text-[#B5FE83]' >Read more... </Link>
    </section>
    )
}

const Blog = () => {
    const [blogPost, setblogPost] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);
        axios.get(BASE_API_URL + 'products/')
        .then((res)=>{
            console.log(res)
            const allPost = res.data.products;
            setblogPost(allPost)
            setisLoading(false)
        })
        .catch((error)=>{
            console.log(error);
            setisLoading(false)
        })
    }, [])


  return (
    <section className='w-full flex flex-wrap justify-center'>
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
        {
            isLoading && 
            <div>
                <div className='loadbg'></div>
                <div className='loadbx'>
                <div className='ring'></div>
                </div>
            </div>
        }
    </section>
  )
}

export default Blog