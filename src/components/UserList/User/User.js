import React from 'react';
import { Link } from 'react-router-dom';

function User({user}) {
    return (
        <li>
            <div>
                <span>Name: {user.name} </span>
                <span>Email: {user.email} </span>
                <span>Login: {user.username} </span>
                <span><Link to={`/post/${user.id}`}>See Posts</Link></span>
                <span><Link to={`/user/${user.id}`}>Edit</Link></span>
            </div>
        </li>
    );
}

export default User;