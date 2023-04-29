import { Component } from "react";
import { Link } from "react-router-dom";
import { getUsers } from '../APIs/Api.js';
///<!--Don't use double or single qutation o "" on onClick=-->

class UsersComponent extends Component {
    state = {
        users : []
    }
    componentDidMount = () =>{
        getUsers().then((reponse) => {
            this.setState({
                users: reponse.data
            });
        }).catch((error) => {
            alert(error);
        });
    }
    
    render (){///Render JSX html code
        return <div>
        <h3>Users : (Loading users may take time Okay ?) </h3>
        <ul>
            {this.state.users.map(user=>
                <li key={user.id}>
                    {user.name}{"  "}
                    <Link to={ "/users/view/" + user.id}>View</Link>| {"  "}
                    <Link to={ "/users/edit/" + user.id}>Edit</Link>| {"  "}
                    <Link to={ "/users/create" }>Create</Link>| {"  "}
                    <button onClick={()=> this.deleteUser(user)}>
                            Delete
                    </button>
                </li>
            )}
        </ul>
        </div>;
    }
}

export default UsersComponent;