import React from "react";

function Users(props) {
    return <ul>
           {props.users.map( (item, i)=> <li key={item.id}>{i} - {item.name}</li>)};
        </ul>  
    ;
}
export default Users;
