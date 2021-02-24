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
        <>
        <button onClick={goBack}>Go back</button>
        <div>
            <span>Name: {user[0].name} </span>
            <span>Email: {user[0].email} </span>
            <span>Login: {user[0].username} </span>
        </div>
        <div>
            Posts:
            <ul>
                {postList && postList
                .filter((post) => post.userId === +id)
                .map((post) => <Post key={post.id} post={post}/>)}
            </ul>
        </div>
        </>
    );
}

export default PostList;

