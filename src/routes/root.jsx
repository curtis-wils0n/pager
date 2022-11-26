export default function Root() {
  return (
    <>
 <html>
    <head>
        <title>Navigation bar DEMO</title>
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <header>
           <h1>Pager</h1>
            <nav>
                <ul>
                <li>
                  <a href={`user`}>My Profile</a>
                  </li>
                 <li>
                   <a href={`user/shelf`}>My Shelf</a>
                   </li>
                 <li>
                  <a href={`user/reviews`}>My Reviews</a>
                   </li>
                 <li>
                  <a href={`user/lists`}>My Lists</a>
                  </li>
                 <li>
                  <a href={`/`}>Logout</a>
                   </li>
                </ul>
            </nav>
        </header>
        <main>
            <p>Books or something.</p>
        </main>
    </body>
</html>
    </>
  );
}

