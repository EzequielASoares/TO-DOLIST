import { Container, List } from '@mui/material'
import React, { useState } from 'react'
import Form from '../components/Form'
import TodoItem from '../components/TodoItem'

export default function Home() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
      console.log(todo)
      setTodos([...todos, todo])
    };

    const deleteTodo = (id) => {
      var filtered = todos.filter((todo) => todo.id !== id);
      setTodos(filtered);
    };

    const editTodo = (id, editedText) => {
      var todosArray = [...todos];

      for (var i in todosArray){
        if(todosArray[i].id == id){
          todosArray[i].text = editedText
        }
      }
      setTodos(todos);


    }



  return (
    <Container maxwidht="xs" style={{ marginTop: '3em'}}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: '1em' }}>
        {todos.map((todo) => (
        <div key={todo.id} style={{ marginTop: '1em' }}>
        <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} /> 
        </div>
        ))}
      
      </List>
      
    </Container>
  )
}
