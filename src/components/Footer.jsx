import React from 'react';

export default function Footer() {
  
  const year = new Date().getFullYear();

  return (
    <footer>{`Copyright © Pager ${year}`}</footer>
  );
};
