import React from "react";
import FormLists from '../components/Form/FormLists';
import useAPIData from '../hooks/useAPIData';

export default function UserLists() {

  const {
  renderedLists
  } = useAPIData()

  return (
    <div>
      <FormLists />
    {renderedLists}
    </div>
  );
}