import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { id, successDelete } = props;

    const deletePost = e => {
        console.log(id)
        axios.delete('http://localhost:8000/api/posts/' + id)
            .then(res => {
                successDelete(id);
            })
            .catch(err => console.log(err))
    }

    return (
        <button className='btn btn-danger' onClick={deletePost}>
            Delete
        </button>
    )
}

export default DeleteButton;