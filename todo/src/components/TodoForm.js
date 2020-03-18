import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  background: papayawhip;
  border: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #D9C2ED;
  width: 40%;
  margin: 0 auto;
  border-radius: 5px;
  }
`;

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

const TodoForm = ({dispatch}) => {

    const [newText, setNewText] = useState('')
  
    const handleChanges = e => {
      setNewText(e.target.value)
  }
  


    return (
        <div>
            Input: <Input type='text'
            value={newText}
            name='newTodo'
            onChange={handleChanges}/>
            <Button onClick={() => {
              dispatch({ type: 'ADD_TODO', payload: newText  });  
            setNewText('')}}>Add</Button>
        </div>
    )
}

export default TodoForm