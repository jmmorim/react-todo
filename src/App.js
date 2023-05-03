import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState(){

  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')));
  
  useEffect(() => {
   
  localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  },[todoList]);

  return ([todoList, setTodoList]);
}

function App() {

    const [todoList, setTodoList] = useSemiPersistentState([]);

    const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
    }

    const removeTodo = (id) => {

      const filteredtodoList = todoList.filter(item =>id.id!==item.id);
      setTodoList(filteredtodoList)
    }

   return (
     <>
       <h1>Todo list</h1>
       <AddTodoForm onAddTodo={addTodo}/>
       <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
     </>
   );
 }

export default App;
