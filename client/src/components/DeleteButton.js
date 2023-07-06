import React from 'react'
import axios from 'axios'
import styled from 'styled-components';

const StyledButton = styled.button`
margin:0 auto;
margin-top:20px;
// margin-bottom:15px;
padding: 7px;
border: 1px solid rgba(0, 0, 0, 0);
border-radius: 5px;
background: #fff;
width: 330px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

&:hover {
    background-color: #84214d;
    border: 1px solid #aaf;
}
`;

const DeleteButton = (props) => {
    const { id, successDelete } = props;

    const deletePost = e => {
        e.preventDefault();
        console.log(id)
        axios.delete('http://localhost:8000/api/posts/' + id)
            .then(res => {
                successDelete(id);
            })
            .catch(err => console.log(err))
    }

    return (
        <StyledButton onClick={deletePost}>
            Delete
        </StyledButton>
    )
}

export default DeleteButton;