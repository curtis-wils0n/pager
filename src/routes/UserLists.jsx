import React, { useState } from "react";
import FormLists from '../components/Form/FormLists';
import useAPIData from '../hooks/useAPIData';

export default function UserLists() {

  const [showForm, setShowForm] = useState(false);

  const displayForm = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
  }

  const {
    renderedLists
  } = useAPIData()

  return (
    <>
      <form>
        <button onClick={displayForm}>Add List</button>
      </form>
      {showForm && (
        <FormLists />
      )}
      {renderedLists}
    </>
  );
}