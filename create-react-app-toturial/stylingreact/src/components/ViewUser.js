import react from 'react';
export default function (props) {
    return <div>
        <h2>Selected User info</h2>
        <div>Name: {props.userinfo.name}</div>
        <div>Email: {props.userinfo.email}</div>
    </div>
}
