import React from 'react';
import { useRef } from 'react';
import classes from './NewTodo.module.css';
type Props = {
    addTodo: (todoText: string) => void;
   
};

const AddTodo = (props: Props) => {
    const todoInputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = todoInputRef.current!.value;
        
        if (enteredText.trim().length === 0) {
            return;
        }
        props.addTodo(enteredText)
    };
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <label htmlFor='todo'>Todo</label>
            <input type='text' id='todo' ref={todoInputRef} />
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default AddTodo;
