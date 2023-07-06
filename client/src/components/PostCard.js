import DeleteButton from './DeleteButton'
import { Link } from 'react-router-dom'
import React from 'react'

const PostCard = (props) => {
    const { successDelete } = props;
    return (
        <div className='card col-3 m-5 p-0'>
            <img src={props.post.imgUrl} alt={props.post.title} />
            <h3>{props.post.title}</h3>
            <DeleteButton id={props.post._id} successDelete={(id) => successDelete(id)} />
            <Link to={`/detail/${props.post._id}`} className="btn btn-primary mt-3">datails</Link>
        </div>
    )
}

export default PostCard;