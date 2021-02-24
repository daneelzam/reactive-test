import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editingUserAC } from '../../../redux/mainAC';

function EditingUser() {
    const {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userList.filter(user => +user.id === +id))[0] 
    const [inputs, setInputs] = useState({ name: user.name, email: user.email, username: user.username });
    const { username, email, name } = inputs;
    const inputsHandler = ({ target: { name, value } }) => {
        setInputs((prevState) => ({ ...prevState, [name]: value }));
    };
    const goBack = () => {
        history.push('/')
    }
    const createUserHandler = (event) => {
        event.preventDefault();
        dispatch(editingUserAC(name, email, username, id))
        goBack()
    }
    
    return (
        <div className='container'>
        <form className='container' onSubmit={createUserHandler}>
        <fieldset className='container card card-form'>
        <button className='btn' onClick={goBack}>Go back</button>
            <legend>Edit user data</legend>
            <span className='card-form-span'>Name: <input type='text' name='name' value={name} onChange={inputsHandler} required/></span>
            <span className='card-form-span'>Email <input type='email' name='email' value={email} onChange={inputsHandler} required/></span>
            <span className='card-form-span'>Login <input type='text' name='username' value={username} onChange={inputsHandler} required/></span>
            <input className='btn' type='submit' value='Edit'/>
        </fieldset>
        </form>
        </div>
    );
}

export default EditingUser;