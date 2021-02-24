import { MAIN_CREATE_USER, MAIN_EDITING_USER, MAIN_GET_POST_LIST, MAIN_GET_USER_LIST } from "./types";

export const getUserListAC = (userList) => ({ type: MAIN_GET_USER_LIST, payload: userList});
export const getPostListAC = (postList) => ({ type: MAIN_GET_POST_LIST, payload: postList});
export const createUserAC = (name, email, username, id) => ({ type: MAIN_CREATE_USER, payload: {name, email, username, id}});
export const editingUserAC = (name, email, username, id) => ({ type: MAIN_EDITING_USER, payload: {name, email, username, id}});

// thunk

export const getUserListFetchAC = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch(getUserListAC(data)))
}

export const getPostListFetchAC = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch(getPostListAC(data)))
}