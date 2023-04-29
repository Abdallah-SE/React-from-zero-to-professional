import React, { Component } from "react";
import './App.css';

///<!--Don't use double or single qutation o "" on onClick=-->

class DynamicClassName extends Component {
        
    state = {
        constClassName : "green"
    }
    render (){///Render JSX html code
        
        return <div>
            <h1>Set the className dynamically</h1>
            <div  className={this.state.constClassName}>
                Testing dynamic className
            </div>
            <button onClick={() => {this.setState({constClassName: 'red'})}}>
               red
            </button>
            <button onClick={() => {this.setState({constClassName: 'green'})}}>
               green
            </button>
            
        </div>;
    }
}

export default DynamicClassName;