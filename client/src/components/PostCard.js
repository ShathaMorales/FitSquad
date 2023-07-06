import DeleteButton from './DeleteButton'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import React from 'react'

const StyledButton = styled('button')({
    margin: '0 auto',
    marginTop: '40px',
    marginBottom: '15px',
    padding: '7px',
    borderRadius: '5px',
    background: '#fff',
    width: '330px',
    border: 'none',
    outline: 'none',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '#56d0f0',
        border: '1px solid #aaf',
    },
});

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: '#000',
});


const PostCard = (props) => {
    const { successDelete } = props;
    return (
        <div className='card col-3 m-5 p-0'>
            <img src={props.post.Url} alt={props.post.title} />
            <h3>{props.post.title}</h3>
            <DeleteButton id={props.post._id} successDelete={(id) => successDelete(id)} />
            <StyledButton><StyledLink to={`/detail/${props.post._id}`} className="">Details</StyledLink></StyledButton>
        </div>
    )
}

export default PostCard;