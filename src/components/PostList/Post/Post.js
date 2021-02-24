import React from 'react';

function Post({post}) {
    return (
        <div className='card'>
            <h3>Title:{post.title}</h3>
            <span>{post.body}</span>
        </div>
    );
}

export default Post;