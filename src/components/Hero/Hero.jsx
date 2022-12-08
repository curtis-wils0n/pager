import React from "react";

/**
 * Display component for homepage welcome message
 * @param {*} props 
 * @returns JSX Functional Component
 */
export default function Hero(props) {
  return (
    <div className="hero-bg">
      <h1 className="welcome">Welcome to pager</h1>
      <h2 className="subtext">The social sharing app for modern readers</h2>
    </div>
  )
}