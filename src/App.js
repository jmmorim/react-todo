import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  const todoList=[
    {id:1, title: 'Complete assignment'},
    {id:2, title: 'Complete assignment'},
    {id:3, title: 'Complete assignment'}];
  
  const [newTodo,setNewTodo]=useState(''); /* an array with two functions */

  return (
    <div>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={setNewTodo}/> 
        <p>{newTodo}</p>
        <TodoList list={todoList}/>
        {/* these are components taken from the js. functions */}
    </div>
  )
}

export default App;
