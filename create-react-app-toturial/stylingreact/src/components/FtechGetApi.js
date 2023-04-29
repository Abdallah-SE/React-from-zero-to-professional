import React, { Component } from "react";
import './App.css';

import {getUsers, deleteUser, updateUser, addUser} from './Api';

///importing the user details component
import ViewUser from './ViewUser';

import UserForm from './HttpAjaxRequests/UserForm';

class FtechGetApi extends Component {
        state = {
        users : [],
        user : {}
    }
    componentDidMount = () =>{
        getUsers().then((reponse) => {
            this.setState({
                users: reponse.data
            })
        }).catch((error) => {
            alert(error)
        });
    }
    
    setActive = (user) => {
        this.setState({'user': user})
    }
    deleteUser = (user) => {
        
        ///delete the user from the server
        deleteUser(user.id)
        .then(()=>{
            /// delete the user from the dom (state)
        
            let users = this.state.users;
            const index = users.indexOf(user);
            users.splice(index,1);
            this.setState({users});
        }).catch((error)=>{
            alert('حددث خطأ حاول مره اخره من فضلك' + error);
        });
        
        
    }
    updateUser = (values) => {
        const id = this.state.user.id;
        updateUser(id, values).
                then(() => {
                    alert(id);
                }).
                catch((error) => {
                    alert('Error in ' + error)
                })
    }
    addUser = (values) =>{
        addUser(values).
                then(() => {
                    alert('Added');
                }).
                catch((error) => {
                    alert('Error in ' + error)
                })
    }
    render (){///Render JSX html code
        
        return <div>
            <h1 style={{'color': 'blue', 'font-size': '50px'}}>
                Using Fectch Api (axios) && Ajax requests
            </h1>
            <ul>
                {this.state.users.map(user=>
                    <li key={user.id}>
                        {user.name}
                        <button onClick={()=> this.setActive(user)}>
                                View
                        </button>
                        <button onClick={()=> this.deleteUser(user)}>
                                Delete
                        </button>
                    </li>
                )}
            </ul>
            <h2>User Info</h2>
            {this.state.user.id > 0 ? (<ViewUser userinfo={this.state.user} />) : <div>'Please select the user'</div>}
            <h2>Edit Selected User</h2>
            {this.state.user.id > 0 ? (<UserForm 
                                            values={this.state.user} 
                                            onSubmit={this.updateUser}
                                            />) 
                                            : <div>'Please select the user'</div>}
                                            
        <h2>Create new user</h2>
        <UserForm 
                values={{
                    name: '',
                    email: ''
                }} 
                onSubmit={this.addUser}
                /> 
        </div>;
    }
}

export default FtechGetApi;