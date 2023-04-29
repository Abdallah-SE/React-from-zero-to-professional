import React, { useState,useEffect } from 'react';

import { useParams } from "react-router-dom";
import { addUser } from '../APIs/Api.js';
import EditUserForm  from '../Components/EditUserForm.js';

// Prventing transactios
import  { Prompt } from "react-router-dom";

export default function EditUserComponent() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const [user, setUser] = useState({name: '', email: ''});
  
   const addUserFun = (values) => {
        addUser(values).
                then(() => {
                    alert('Success');
                }).
                catch((error) => {
                    alert('Error in ' + error)
                })
   }
  return (
    <div>
      <h3>ADD</h3>
       <EditUserForm values={user}  onSubmit={addUserFun} />
    </div>
  );
}