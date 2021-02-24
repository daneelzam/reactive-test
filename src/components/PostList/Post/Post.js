import React from 'react';

function Post({post}) {
    return (
        <li className='card'>
            <h3>Title:{post.title}</h3>
            <span>{post.body}</span>
        </li>
    );
}

export default Post;