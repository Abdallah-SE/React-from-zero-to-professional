import React, { useState,useEffect } from 'react';

import { useParams } from "react-router-dom";
import { getUser, updateUser } from '../APIs/Api.js';
import EditUserForm  from '../Components/EditUserForm.js';
 
export default function EditUserComponent() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    const [user, setUser] = useState({name: '', email : ''});
    
    useEffect(() => {
        getUser(id).then((reponse) => {
                setUser( reponse.data );
        }).catch((error) => {
            alert(error);
        });
    }, [])
   const updateUserFun = (values) => {
        updateUser(id, values).
                then(() => {
                    alert(id);
                }).
                catch((error) => {
                    alert('Error in ' + error)
                })
   }
  return (
    <div>
      <h3>ID: {user.email}</h3>
       <EditUserForm values={user} onSubmit={updateUserFun} />
    </div>
  );
}