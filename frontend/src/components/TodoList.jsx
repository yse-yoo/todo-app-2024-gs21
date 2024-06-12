import React, { useState } from 'react'

function TodoList() {
    // use state
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // button を clickした時の処理
    const addHandler = (e) => {
        // console.log("click!!!!")
        console.log(newTodo)

        setTodos([...todos, newTodo])
    }

    // textbox の値が変わったときに処理
    const changeHandler = (e) => {
        // console.log("change!!!!")
        //console.log(e.target.value)
        setNewTodo(e.target.value)
    }

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                placeholder="Add a new todo."
                onChange={changeHandler}
                value={newTodo}
            />
            <button onClick={addHandler}>Add</button>

            <div>
                <ul>
                    {
                        todos.map(todo => (
                            <li>{todo}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList