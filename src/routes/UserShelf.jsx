import React from "react";
import FormTemplate from "../components/Form/FormTemplate"
import useAPIData from '../hooks/useAPIData';

export default function UserShelf() {
  
 const {
  renderedUserShelf
 } = useAPIData();


  return (
    <>
      <FormTemplate
        type="books"
      />
      <ul>
        {renderedUserShelf}
      </ul>
    </>  
  );
}