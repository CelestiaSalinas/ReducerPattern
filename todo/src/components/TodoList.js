import React, { useReducer } from 'react';
import Todo from './Todo'
import TodoForm from './TodoForm'
import { reducer, initialState } from '../reducers/reducer'
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #431070;
  border: 2px solid #431070;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  margin:30px;
  &:hover {
    background-color: #8b3ad6;
    color: white;
  }`

const TodoList = () => {
    const [taskState, dispatch] = useReducer(reducer, initialState)

    const Completed = id => {
        dispatch({type: 'TOGGLE_COMPLETED', payload: id})
    }

    return (
        <div>
            <TodoForm dispatch={dispatch} />
            {taskState.todos.map(todo => (
              <Todo key={todo.id} todo={todo} dispatch={dispatch} completed={Completed} />  
            ))}
            <Button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</Button>
        </div>
    )
}

export default TodoList