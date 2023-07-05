import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
    const [post, setPost] = useState({})
    let { id } = useParams()
    useEffect(() => {
        console.log(id)
        axios.get('http://localhost:8000/api/posts/' + id)
            .then(res => {
                setPost(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className='col-5'>
                    <h1>{post.title}</h1>
                    <img src={post.Url} alt={post.title} className='w-100' />
                    <Link to={`/edit/${post._id}`} className="btn btn-primary mt-3">Edit</Link>
                </div>
                <div className='col-7'>
                    <h3>Details</h3>
                    <p>{post.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Details;