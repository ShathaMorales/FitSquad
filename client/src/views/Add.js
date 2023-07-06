import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import React from 'react';
import axios from 'axios';

const Add = (props) => {
  const [errors, setErrors] = React.useState([]);
  const navigate = useNavigate();
  const { user } = props;
  const pic = 'https://ik.imagekit.io/shadid/young-beautiful-woman-bright-sportwear-isolated-gradient-pink-blue-background-neon-light.jpg?updatedAt=1688593548828'

  const create = (add) => {
    console.log(add)
    axios.post('http://localhost:8000/api/posts', add)
      .then((res) => {
        console.log(res);
        navigate('/detail/${post._id}');
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response?.data?.message || 'An error occurred.');
      })
  }

  return (
    <div>
      <Form formSubmitted={create} id={''} pic={pic} isUpdate={false} user={user} formAction={'Add Excersise'} errors={errors} />
    </div>
  )
}

export default Add;
