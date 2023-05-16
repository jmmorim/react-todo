import React, { useRef, useEffect } from 'react';

function InputWithLabel({children,todoTitle,handleTitleChange}){

    const inputRef=useRef();

    useEffect(() => {
   
    inputRef.current.focus(); /* current e o que esta no momento selecionado */

    },[]);

    return (
        <>
        <label htmlFor="todoTitle">{children} </label>
        <input id="todoTitle" type='text' name='title' ref={inputRef} value={todoTitle} onChange={handleTitleChange}/>
        </>
    );
}

export default InputWithLabel;