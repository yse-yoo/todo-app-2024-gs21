import React, { useState } from 'react'

function TodoList() {
    // use state
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addHandler = (e) => {

    }

    return (
        <div>
            <h2>Todo List</h2>
            <input type="text" placeholder="Add a new todo." />
            <button onClick={addHandler}>Add</button>
        </div>
    )
}

export default TodoList