import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserAC } from '../../redux/mainAC';

function CreateUser() {
    const dispatch = useDispatch();
    const {userList} = useSelector((state) => state) 
    const [inputs, setInputs] = useState({ name: '', email: '', username: '' });
    const { username, email, name } = inputs;
    const inputsHandler = ({ target: { name, value } }) => {
        setInputs((prevState) => ({ ...prevState, [name]: value }));
    };
    const newId = () => userList.sort((a, b) => a.id - b.id)[userList.length - 1].id
    const createUserHandler = (event) => {
        event.preventDefault();
        const id = newId() + 1;
        dispatch(createUserAC(name, email, username, id))
    }
    return (
        <form onSubmit={createUserHandler}>
            Name: <input type='text' name='name' value={name} onChange={inputsHandler} required/>
            Email <input type='email' name='email' value={email} onChange={inputsHandler} required/>
            Login <input type='text' name='username' value={username} onChange={inputsHandler} required/>
            <input type='submit'/>
        </form>
    );
}

export default CreateUser;