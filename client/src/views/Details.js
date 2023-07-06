import { Link, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useState } from 'react'
import axios from 'axios'

const StyledButton = styled.button`
margin:0 auto;
margin-top:40px;
margin-bottom:15px;
padding: 7px;
border: 1px solid rgba(0, 0, 0, 0);
border-radius: 5px;
background: #fff;
width: 330px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

&:hover {
    background-color: #56d0f0;
    border: 1px solid #aaf;
}
`;

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
                    <img src={post.Url} alt={post.title} className='w-100 h-100vh' />
                </div>
                <div className='col-7'>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <StyledButton><Link to={`/edit/${post._id}`}>Edit</Link></StyledButton>
                </div>
            </div>
        </div>
    )
}

export default Details;