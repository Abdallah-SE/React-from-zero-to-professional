import React, { Component } from "react";


import Task from './components/Task';
import CreateTask from './components/CreateTask';

class Hello extends Component {
    state = { 
        newTask : "",
        todos : [
                {text: 'Learn ReactJS'},
                {text: 'Learn AngularJS'},
                {text: 'Learn VueJS'},
                {text: 'Learn SveleteJS'}
            ] 
    };
    
    completeTask = (index) => {
        const todos = [...this.state.todos];
        todos.splice(index,1);
        
        this.setState({
            todos
        });
        
    }
    
    addTask = () => {
        const todos = [...this.state.todos];
        todos.push({
            text: this.state.newTask
        });
        this.setState({
            todos,
            newTask: ''
        });
    }
    
    updateNewTask = (event) => {
        this.setState({
            newTask: event.target.value
        });
    }
    render (){///Render JSX html code
        return <div>Hello Componet ByMainApp-Class
        <ul>
                {this.state.todos.map( (todo, index) => <Task completeTask={this.completeTask} todo={todo} index={index}  key={index} />)}
            </ul>
            <br />
            <CreateTask value={this.state.newTask} updateNewTaskProps={this.updateNewTask} addTaskProps={this.addTask} />
        </div>;
    }
}

export default Hello;