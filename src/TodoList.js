import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList(props) {

return (
        <ul>
            {props.list.map((obj) => 
            (<TodoListItem key={obj.id} vector={obj}/> /* vector defines what 'props name' we will use within todoListItem*/
            ))}
        </ul>
        );
}

export default TodoList;