import React from 'react'
import Form from '../components/Form'
import DeleteButton from '../components/DeleteButton'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Update = () => {
  const Navigate = useNavigate()
  const [post, setPost] = useState([])
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/' + id)
      .then(res => {
        setPost(res.data)
        setLoaded(true)
      })
      .catch(err => {
        console.log(err)

      })
  }, [])
  const formSubmitted = post => {
    axios.put('http://localhost:8000/api/posts/' + id, post)
      .then(res => {
        console.log(res)
        Navigate('/list')
      })
      .catch(err => {
        setErrors(err.response.data.message)
      })
  }

  return (
    <div className='row'>
      {loaded ?
        <>
          <DeleteButton id={id} />
          <Form post={post} formAction={"update post"} formSubmitted={formSubmitted} errors={errors} />
        </>
        :
        <p>Loading...</p>
      }
    </div>
  )
}

export default Update