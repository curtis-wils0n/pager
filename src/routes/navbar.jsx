import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
 <html>
    <body>
        <header>
           <h1>Pager</h1>
            <nav>
                <ul>
                <li>
                  <Link to='user'>My Profile</Link>
                  </li>
                <li>
                  <Link to='user/shelf'>My Shelf</Link>
                  </li>
                <li>
                  <Link to='user/reviews'>My Reviews</Link>
                  </li>
                <li>
                  <Link to='user/lists'>My Lists</Link>
                  </li>
                <li>
                  <Link to='/'>Logout</Link>
                  </li>
                <li>
                   <Link to='login'>Login</Link>
                  </li>
                <li>
                   <Link to='register'>Register</Link>
                  </li>
                </ul>
            </nav>
        </header>
    </body>
</html>
    </>
  );
}

