import React, {useState} from 'react';

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
            <label htmlFor="todoTitle">Title </label>
            <input id="todoTitle" type='text' name='title' value={todoTitle} onChange={handleTitleChange}/>
            <button type="submit">Add</button>
        </form>

    );

}

export default AddTodoForm;