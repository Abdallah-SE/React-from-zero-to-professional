import React, { Component } from "react";
import './App.css';

///<!--Don't use double or single qutation o "" on onClick=-->

class DynamicStyling extends Component {
        
    state = {
        active : true,
        constClassName: 'green'
    }
    render (){///Render JSX html code
        const style1 = {color: 'blue', 'font-size': '50px'};
        if(this.state.active){
            style1.color = 'yellow'
        }
        return <div>
            <h1 style={style1}>Set the styling dynamically</h1>
            <div  className={this.state.active ? 'green' : 'red'}>
                Testing dynamic styling
            </div>
            <button style={{ fontWeight: 'bold'}} onClick={() => {this.setState({constClassName: 'red'})}}>
               red
            </button>
            <button onClick={() => {this.setState({constClassName: 'green'})}}>
               green
            </button>
            <button onClick={() => {this.setState({active: !this.state.active})}}>
               active
            </button>
        </div>;
    }
}

export default DynamicStyling;