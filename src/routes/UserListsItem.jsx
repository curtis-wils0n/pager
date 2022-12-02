import React from "react";

export default function UserListsItem(props) {

  return (
    <li>
      <p>{props.title} about: {props.description} created by: {props.first_name} {props.last_name}</p>
    </li>
  );
}