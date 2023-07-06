import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import React from 'react'
import axios from 'axios'

const Update = (props) => {
  const { user } = props
  const Navigate = useNavigate()
  const [post, setPost] = useState([])
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([])
  const pic = 'https://ik.imagekit.io/shadid/copy-space-woman-exercising-boxing.jpg?updatedAt=1688601096484'

  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/' + id)
      .then(res => {
        console.log(res)
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
        Navigate('/schedule')
      })
      .catch(err => {
        setErrors(err.response.data.message)
      })
  }

  return (
    <div className='row'>
      {loaded ?
        <>
          <Navbar user={props.user} />
          <Form post={post} user={user} id={id} pic={pic} isUpdate={true} formAction={"Update Excersise"} formSubmitted={formSubmitted} errors={errors} />
        </>
        :
        <p>Loading...</p>
      }
    </div>
  )
}

export default Update