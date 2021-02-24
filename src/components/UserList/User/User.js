import React from 'react';
import { Link } from 'react-router-dom';

function User({user}) {
    return (
        <li className='card card-1'>
                <h3>Name: {user.name} </h3>
                <span>Email: {user.email} </span>
                <span>Login: {user.username} </span>
                <span><Link className='btn' to={`/post/${user.id}`}>See Posts</Link></span>
                <span><Link className='btn' to={`/user/${user.id}`}>Edit</Link></span>
        </li>
    );
}

export default User;