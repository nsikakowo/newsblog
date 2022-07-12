import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

const SinglePost = () => {
    const {id} = useParams();

    const [article, setarticle] = useState({});
    const [photos, setphotos] = useState([]);
    const [isLoading, setisLoading] = useState(false);


    useEffect(() => {
        setisLoading(true)
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((res)=>{
            console.log(res.data)
            setarticle(res.data)
            setphotos(res.data.images);
            setisLoading(false)

        })
        .catch((error)=>{
            console.log(error);
            setisLoading(false)
        })
    }, [id])
    


  return (
    <section className='py-7 flex flex-col items-center '>
        {
            isLoading ?
            <div>
                <div className='loadbg'></div>
                <div className='loadbx'>
                <div className='ring'></div>
                </div>
            </div>
            :
        
        <>
        <div className=' px-2'>
            <div className='w-full h-[450px]'>
                 <img src={article.thumbnail} alt="" className="object-cover w-[100%] h-[100%]"/>
            </div>
        <div className='flex my-[10px]'>
            {
                photos.map((img, index)=> (
                    <div key={index} className='flex flex-row w-[100px] h-[100px]'>
                        <img src={img} alt="" />

                    </div>
                ))
            }
        </div>
        <h1 className='text-5 font-bold my-2'>{article.title}</h1>
        <div className='flex w-full justify-between'>
            <p><span className='font-bold'>BRAND: </span>{article.brand} </p>  
            <p><span className='font-bold text-[#5FD068]'>IN STOCK: </span>{article.stock} </p>
            <h4 className='capitalize'><span className='font-bold text-[#FFBC97]'>Category: </span>{article.category}</h4>
        </div>
        <h5 className='my-2'>
        <span className='font-bold'>Price: </span>
            {article.price}
        </h5>

        <h5 className='my-2'>
        <span className='font-bold'>Discount: </span>
            {article.discountPercentage}
        </h5>

        <p className='my-2'>
        <span className='font-bold'>RATING: </span>
            {article.rating}
        </p>

        <p className='w-[90%] my-3 text-3'>
            <span className='font-bold'>Description: </span>
            {article.description}
        </p>

        </div>
        <Link to="/">
            <button className='py-1 px-2 cursor-pointer m-3 bg-[#FFBC97] rounded-[4px] ' >Back to All Post</button>
        </Link>
        </>
}
    </section>
  )
}

export default SinglePost