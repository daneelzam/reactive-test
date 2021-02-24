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
        <form className='container' onSubmit={createUserHandler}>
        <fieldset className='container card card-form'>
            <legend>Create new user</legend>
            <span className='card-form-span'>Name: <input type='text' name='name' value={name} onChange={inputsHandler} required/></span>
            <span className='card-form-span'>Email <input type='email' name='email' value={email} onChange={inputsHandler} required/></span>
            <span className='card-form-span'>Login <input type='text' name='username' value={username} onChange={inputsHandler} required/></span>
            <input className='btn' type='submit' value='create'/>
        </fieldset>
        </form>
    );
}

export default CreateUser;