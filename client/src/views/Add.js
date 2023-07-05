import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import React from 'react';
import axios from 'axios';

const Add = (props) => {
  const [errors, setErrors] = React.useState([]);
  const navigate = useNavigate();

  const create = (add) => {
    console.log(add)
    axios.post('http://localhost:8000/api/posts', add)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response?.data?.message || 'An error occurred.');
      })
  }

  return (
    <div>
      <Form formSubmitted={create} formAction={'add Training'} errors={errors} />
    </div>
  )
}

export default Add;
