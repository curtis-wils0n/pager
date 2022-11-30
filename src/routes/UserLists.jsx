import React, { useState, useEffect } from "react";
import axios from "axios";
import UserListsItem from "./UserListsItem";
import FormLists from '../components/Form/FormLists';

export default function UserLists() {

  const [lists, setLists] = useState([]);
  
  useEffect(() => {
    const listURL = '/api/lists';
    Promise.all([
      axios.get(listURL)
    ]).then((all) => {
      setLists(all[0].data);
    });
  }, []);

  const renderedLists = lists.map(list => 
    <UserListsItem 
      key={list.id}
      title={list.title}
      description={list.description}
      first_name={list.first_name}
      last_name={list.last_name}
    />
  )

  return (
    <div>
      <FormLists />
    {renderedLists}
    </div>
  );
}