import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from '../components/PostCard'
import Navbar from '../components/Navbar';

const Calender = (props) => {

    const containerStyle = {
        background: `url('https://ik.imagekit.io/shadid/colorful-abstract-textured-background-design.jpg?updatedAt=1688611585122')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    };

    const [posts, setPosts] = useState([])
    const removeFromDom = (id) => {
        console.log('deletefrom dom')
        setPosts(posts.filter(post => post._id !== id))
    }
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/posts")
            .then((res) => {
                console.log(res.data)
                setPosts(res.data)
            }
            )
            .catch((e) => {
                {
                    console.log(e)
                }
            })
    }, [])

    return (
        <div style={containerStyle} className='row'>
            <Navbar user={props.user} />
            {
                posts.map((post, idx) => {
                    return <PostCard post={post} key={idx} successDelete={removeFromDom} />
                })}
        </div>
    )
}

export default Calender