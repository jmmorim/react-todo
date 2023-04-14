import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todoList}) {

    return (
        <ul>
            {todoList.map((obj) => 
            (<TodoListItem vec={obj} key={obj.id}/> /* vector defines what 'props name' we will use within todoListItem*/
            ))}
        </ul>
    );
}

export default TodoList;