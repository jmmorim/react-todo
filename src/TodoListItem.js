import React from 'react';

function TodoListItem ({vec,onRemoveTodo}) {

    return (
        <li> {vec.title} <button type='button' onClick={() => onRemoveTodo(vec)}>remove</button> </li>
        )
};

export default TodoListItem;