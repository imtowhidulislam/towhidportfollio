import React, { useEffect, useState } from 'react'
import "../style/blog.css"
const demoUrl =  "https://fakestoreapi.com/products/";
const Blog = () => {
    const [fakeData, setFakeData] = useState([]);
    const getData = async () => {
        const res = await fetch(demoUrl);
        const data = await res.json();
        return setFakeData(data);
    }
    useEffect(() => {
        getData();
    },[fakeData]);
  return (
    <div className='blog_container-main'>
        {
            fakeData.map(blogs => {
                const {id, image, title,category, description} = blogs;
                return (
                    <div key={id} className="blog_container">
                        <div className='img_container'>
                            <img src={image} alt="" />
                        </div>
                        <div className="blog_content">
                            <h2>{title}</h2>
                            <h5>{category}</h5>
                            <p>{description}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Blog