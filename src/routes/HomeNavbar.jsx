import * as React from 'react';
import { Link } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../styles/navbar.css';


export default function Navbar() {
  
  return (
    <>
      <header className="header">
        <h1 className="title">
          <a href='/'>pager</a>
          <MenuBookIcon className="bookicon"/>
        </h1>
          <div className="register-link">
          <Link className="register-link" to='register'>Register</Link>
          </div>
        <nav>
          <div className="topnav">
            <div className="login-link">
          <Link className="login-link" to='login'>Login</Link>
          </div>
          </div>
        </nav>
      </header>

    </>
  );
}
