import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({onAddTodo}){

    const [todoTitle,setTodoTitle]=useState('');

    function handleTitleChange(event){
        const newtodoTitle = event.target.value;
        setTodoTitle(newtodoTitle);
    }

    function handleAddTodo(event){
        event.preventDefault();
        onAddTodo({title: todoTitle, id: Date.now()});
        setTodoTitle(''); 
    };

    return (

        <form id="todoform" onSubmit={handleAddTodo}>
            <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title</InputWithLabel>
            <button type="submit">Add</button>
        </form>

    );

}

export default AddTodoForm;