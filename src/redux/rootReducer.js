import { MAIN_CREATE_USER, MAIN_EDITING_USER, MAIN_ERROR, MAIN_GET_POST_LIST, MAIN_GET_USER_LIST } from "./types";

const windowState = JSON.parse(window.localStorage.getItem('state'));

let preloadedState = {};

if (windowState) {
  preloadedState = { 
    mainError: null, userList: windowState.userList, postList: windowState.postList
  };
} else {
  preloadedState = {
    mainError: null, userList: null, postList: null
  };
}

const rootReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case MAIN_ERROR:
      return {
        ...state,
        mainError: action.payload
      };
    case MAIN_GET_POST_LIST:
      return {
        ...state,
        postList:action.payload
      };
    case MAIN_GET_USER_LIST:
        return {
        ...state,
        userList:action.payload
        };
    case MAIN_CREATE_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload]
      }
    case MAIN_EDITING_USER:
      return {
        ...state,
        userList: [...state.userList.map( user => {
          if (+user.id === +action.payload.id){
            return action.payload
          }
          return user
        })]
      }
    default:
      return state;
  }
};

export default rootReducer;
