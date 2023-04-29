import React, { Component } from "react";

///<!--Don't use double or single qutation o "" on onClick=-->

class Hello extends Component {
    
    constructor (props) {
        super(props);
        
        this.increaseByTwo = this.increaseByTwo.bind(this);
    }
    /*
     * State vs props
     * state is for component
     * state can edit it with event or input something
     * state can have [] or object
     * state can't use with function (hooks solve that)
     * */
    state = { 
        age: 21,
        user : {
            name: 'Abdallah',
            lname: 'Mahmoud'
        },
        links : [
            'fb',
            'tw'
        ]
    };
    decrease = () => {
            this.setState({age: this.state.age - 1});
        }
    decreaseByTwo() {
            this.setState({age: this.state.age - 2});
        }
    increaseByTwo() {
            this.setState({age: this.state.age + 2});
        }
        
    updateName(event) {
        const newName = event.target.value;
        this.setState({
            user: {
                /*if you have a lot of parameters use ... spread operator*/
                ...this.state.user,
                name: newName
            }
        });
        console.log(this.state.user);
    }
    render (){///Render JSX html code
        return <div>Hello Componet By-Class, {this.props.name}
        <p>{this.state.age} And My Name is {this.state.user.name} {this.state.user.lname} </p>
        
        <button onClick={ () => {this.setState({age: this.state.age + 1})} }>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.decreaseByTwo.bind(this)}>Decrease By Two</button>
        <button onClick={this.increaseByTwo}>increase By Two</button>
        <br />
        <input value={this.state.user.name} type="text" onChange={this.updateName.bind(this)} />
        </div>;
    }
}

export default Hello;