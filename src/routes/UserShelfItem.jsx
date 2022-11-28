import React from "react";

export default function UserShelfItem(props) {

  return (
    <li>
      <img 
        src={props.book_cover_art_url}
        alt={props.title}
        width='200'
        height='300'
      />
      <p>{props.title} ({props.year}) by {props.author}</p>
    </li>
  );
}