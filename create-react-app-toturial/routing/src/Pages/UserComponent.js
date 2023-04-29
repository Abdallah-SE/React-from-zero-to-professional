import React, { useState } from 'react';

import { useParams } from "react-router-dom";
import { getUser } from '../APIs/Api.js';
import ViewUser  from '../Components/ViewUser.js';
 
export default function UserComponent() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    
    const [user, setUser] = useState({});
    getUser(id).then((reponse) => {
        setUser( reponse.data );
    }).catch((error) => {
        alert(error);
    });
  return (
    <div>
      <h3>ID: {user.email}</h3>
       <ViewUser user={user} />
    </div>
  );
}