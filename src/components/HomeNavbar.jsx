import * as React from 'react';
import { Link } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../styles/navbar.css';


export default function Navbar() {
  
  return (
    <>
      <header className="header">
        <h1 className="title">
          <Link to={'/'}>pager <MenuBookIcon /></Link>
        </h1>
        <nav>
          <div className="home-link">
          <Link className="home-link-text" to={'/register'}>Register</Link>
          </div>
          <div className="login-link">
          <Link className="login-link-text" to={'/login'}>Login</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
