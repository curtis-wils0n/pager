import React from 'react';

/**
 * Display component for example of book covers on homepage
 * @param {*} props 
 * @returns JSX Functional Component
 */
export default function HeroExamples(props) {

  return (
    <div className="hero-example-bg">
      <div className="hero-example-content">
        <h1>Discover the classics, old and new</h1>
      </div>
      <div className="hero-example-books">
        <img
          className="book-cover"
          src="https://github.com/curtis-wils0n/pager-api/blob/main/src/db/assetts/Dune_cover.jpeg?raw=true"
          alt="Dune cover"
          width={200}
          height={300}
        />
        <img 
          className="book-cover"
          src="https://github.com/curtis-wils0n/pager-api/blob/main/src/db/assetts/battle-angel-cover.jpeg?raw=true"
          alt="Alita Battle Angel cover"
          width={200}
          height={300}
        />
        <img 
          className="book-cover"
          src="https://github.com/curtis-wils0n/pager-api/blob/main/src/db/assetts/nineteen-eighty-four-1984-cover.jpeg?raw=true" 
          alt="1984 cover" 
          width={200}
          height={300} 
        />
        <img
          className="book-cover"
          src="https://github.com/curtis-wils0n/pager-api/blob/main/src/db/assetts/house-of-suns-cover.jpeg?raw=true"
          alt="To Kill a Mocking Bird cover"
          width={200}
          height={300}
        />
      </div>
    </div>
  )
}