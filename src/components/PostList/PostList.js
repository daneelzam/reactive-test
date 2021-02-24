import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Post from './Post/Post';

function PostList() {
    const history = useHistory();
    const {id} = useParams();
    const { postList } = useSelector((state)=> state);
    const user = useSelector(state => state.userList.filter(user => +user.id === +id)) 

    const goBack = () => {
        history.push('/')
    }
    return (
        <div className='column-container'>
        <div className='card card-form'>
            <span className='card-form-span'>Name: {user[0].name} </span>
            <span className='card-form-span'>Email: {user[0].email} </span>
            <span className='card-form-span'>Login: {user[0].username} </span>
            <button className='btn' onClick={goBack}>Go back</button>
        </div>
        <h1>Posts:</h1>
        <div>
            <ul className='container'>
                {postList && postList
                .filter((post) => post.userId === +id)
                .map((post) => <Post key={post.id} post={post}/>)}
            </ul>
        </div>
        </div>
    );
}

export default PostList;

