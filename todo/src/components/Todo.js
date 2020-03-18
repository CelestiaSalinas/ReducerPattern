import React from 'react';


const Todo = ({dispatch, ...props}) => {

    return (
    <div  onClick={() => props.completed(props.todo.id)}>
        
        <p style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' }}>{props.todo.item}</p>
    </div>
    )
    }

export default Todo