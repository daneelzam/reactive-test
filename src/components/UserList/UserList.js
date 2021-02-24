import React from 'react';
import { useSelector } from 'react-redux';
import CreateUser from '../CreateUser/CreateUser';
import User from './User/User'

function UserList(props) {
    const {userList} = useSelector( (state) => state)

    return (
        <div className='container'>
        <CreateUser/>
        <ul className='container'>
            {userList && userList.map(user => <User key={user.id} user={user}/>)}
        </ul>
        </div>
    );
}

export default UserList;