import React from 'react';
import { useSelector } from 'react-redux';
import CreateUser from '../CreateUser/CreateUser';
import User from './User/User'

function UserList(props) {
    const {userList} = useSelector( (state) => state)

    return (
        <>
        <CreateUser/>
        <ul>
            {userList && userList.map(user => <User key={user.id} user={user}/>)}
        </ul>
        </>
    );
}

export default UserList;