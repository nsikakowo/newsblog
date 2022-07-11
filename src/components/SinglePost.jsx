import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const SinglePost = () => {
    const {id} = useParams();

    const [article, setarticle] = useState({});
    const [photos, setphotos] = useState([])

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((res)=>{
            console.log(res.data)
            setarticle(res.data)
            setphotos(res.data.images)

        })
        .catch((error)=>{
            console.log(error)
        })
    }, [id])
    


  return (
    <section>
        <img src={article.thumbnail} alt="" />
        <div className='flex my-[10px]'>
            {
                photos.map(img=> (
                    <div className='flex flex-row w-[100px] h-[100px]'>
                        <img src={img} alt="" />

                    </div>
                ))
            }
        </div>
        <h1>{article.title}</h1>
        <p>BRAND: {article.brand} </p>
        <h4>Category: {article.category}</h4>
        <h5>Price: {article.price}</h5>
        <h5>Discount: {article.discountPercentage}</h5>
        <p>IN STOCK: {article.stock} </p>
        <p>RATING: {article.rating}</p>
        <p>Description: {article.description}</p>
    </section>
  )
}

export default SinglePost