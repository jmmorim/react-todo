import React from 'react';

function AddTodoForm(props){

function handleAddTodo(event){

event.preventDefault();
const todoTitle = event.target.title.value;
props.onAddTodo(todoTitle);
document.getElementById("todoform").reset();

};

    return (

        <form id="todoform" onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title </label>
            <input id="todoTitle" type='text' name='title'/>
            <button type="submit">Add</button>
        </form>

    );

}

export default AddTodoForm;