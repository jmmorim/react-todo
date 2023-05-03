import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  //const [newTodo,setNewTodo]=useState(''); /* an array with two functions */

    const [todoList,setTodoList]=useState([]); /* an array with two functions */

    function addTodo(newTodo){
      setTodoList([...todoList,newTodo])
    }

  return (
    <div>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}/> 
        {/* <p>{newTodo}</p> */}
        <TodoList todoList={todoList}/>
        {/* these are components taken from the js. functions */}
    </div>
  )
}

export default App;
