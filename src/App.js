import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';

import Navbar from './routes/navbar';
import Home from './routes/home';
import Login from './routes/login';
import Register from './routes/register';
import User from './routes/user';
import UserShelf from './routes/UserShelf';
import Lists from './routes/UserLists';
import UserReviews from './routes/UserReviews';
import useToken from './hooks/useToken';

function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  } 

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/login' element={ <Login /> }></Route>
        <Route path='/register' element={ <Register /> }></Route>
        <Route path='/user' element={ <User /> }></Route>
        <Route path='/user/shelf' element={ <UserShelf /> }></Route>
        <Route path='/user/lists' element={ <Lists /> }></Route>
        <Route path='/user/reviews' element={ <UserReviews /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
