import React from 'react';

/// small component task and use it in the class

function Task(props){
    const todo = props.todo;
    const index = props.index;
    const completeTask = props.completeTask;
    return (<li>
        {todo.text}
        <button 
            onClick={() => completeTask(index) }
            >Done</button>
    </li>);
}

export default Task;
