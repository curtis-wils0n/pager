import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';

import Home from './routes/home';
import Login from './routes/login';
import Register from './routes/register';
import Book from './routes/Book'
import User from './routes/user';
import UserShelf from './routes/UserShelf';
import Lists from './routes/UserLists';
import UserReviews from './routes/UserReviews';
import Navbar from './routes/navbar';
import Dashboard from './routes/Dashboard';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/dashboard' element={ <Dashboard /> }></Route>
        <Route path='/login' element={ <Login /> }></Route>
        <Route path='/register' element={ <Register /> }></Route>
        <Route path='/user' element={ <User /> }></Route>
        <Route path='/books/:id' element={ <Book /> }></Route>.
        <Route path='/user/shelf' element={ <UserShelf /> }></Route>
        <Route path='/user/lists' element={ <Lists /> }></Route>
        <Route path='/user/reviews' element={ <UserReviews /> }></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
