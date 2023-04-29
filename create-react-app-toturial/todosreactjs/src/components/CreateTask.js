import React from 'react';

/// Make input and button inside small component

function CreateTask(props){
    return <div>
        <input value={props.value} onChange={props.updateNewTaskProps} type="text" />
        <button onClick={props.addTaskProps}>Add New Todo</button>
    </div>
}
export default CreateTask;
