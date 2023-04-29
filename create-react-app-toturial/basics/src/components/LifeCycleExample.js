import React, { Component } from "react";

///<!--Don't use double or single qutation o "" on onClick=-->

class LifeCycleExample extends Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            time: new Date
        }
    }
    
    componentDidMount(){
        setInterval( ()=>{
            this.setState({time: new Date});
        }, 1000);
    }
    
    render (){///Render JSX html code
        return <div> 
            The time is : {this.state.time.toLocaleTimeString()}
        </div>;
    }
}

export default LifeCycleExample;
