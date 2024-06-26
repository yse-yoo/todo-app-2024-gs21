import React, { useEffect, useState } from 'react'

import axios from 'axios';

function TodoList() {
    // use state
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        console.log('fetch data!!!')
        fetchTodos();
    }, [])
    

    // Backend からデータを取得する
    const fetchTodos = async () => {
        //TODO: Backendにリクエスト
        // var data = ['Apple', 'Grape', 'Orange'];
        const uri = 'http://localhost:3001/api/todo/get';
        const res = await axios.get(uri);
        console.log(res.data)
        setTodos(res.data);
    }

    // button を clickした時の処理
    const addHandler = async (e) => {
        console.log(newTodo)
        if (newTodo == "") return;

        const uri = 'http://localhost:3001/api/todo/add';
        const data = { title: newTodo }
        const res = await axios.post(uri, data);
        console.log(res.data)
        // todos に newTodo を追加
        setTodos([...todos, res.data])
        // newTodoをemptyにする。
        setNewTodo('')
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
                        todos.map((todo, index) => (
                            <li key={index}>{todo.title}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList