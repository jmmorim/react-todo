import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todoList,onRemoveTodo}) {

    return (
        <ul>
            {todoList.map((obj) => 
            (<TodoListItem vec={obj} key={obj.id} onRemoveTodo={onRemoveTodo}/> /* vector defines what 'props name' we will use within todoListItem*/
            ))}
        </ul>
    );
}

export default TodoList;