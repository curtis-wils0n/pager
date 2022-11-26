import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './routes/navbar';
import Home from './routes/home';
import Login from './routes/login';
import Register from './routes/register';
import User from './routes/user';
import Shelf from './routes/user-shelf';
import Lists from './routes/user-lists';
import Reviews from './routes/user-reviews';

function App() {

return (

  <Router>

   <Navbar />

   <Routes>

    <Route path='/' element={<Home />}></Route>
 
    <Route path='/login' element={<Login />}></Route>

    <Route path='/register' element={<Register />}></Route>

    <Route path='/user' element={<User />}></Route>

    <Route path='/user/shelf' element={<Shelf />}></Route>
 
    <Route path='/user/lists' element={<Lists />}></Route>
 
    <Route path='/user/reviews' element={<Reviews />}></Route>

    </Routes>

   </Router>

 );
}

export default App;
