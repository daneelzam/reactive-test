import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import EditingUser from './components/CreateUser/EditingUser/EditingUser';
import PostList from './components/PostList/PostList';
import UserList from './components/UserList/UserList';
import { getPostListFetchAC, getUserListFetchAC } from './redux/mainAC';

function App(props) {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUserListFetchAC())
},[dispatch])
  useEffect(()=>{
    dispatch(getPostListFetchAC())
  },[dispatch])
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'><UserList/></Route>
          <Route path='/post/:id'><PostList/></Route>
          <Route path='/user/:id'><EditingUser/></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;