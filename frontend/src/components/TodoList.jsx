import React, { useEffect, useState } from 'react'

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
        var data = ['Apple', 'Grape', 'Orange'];
        setTodos(data);
    }

    // button を clickした時の処理
    const addHandler = (e) => {
        // console.log("click!!!!")
        console.log(newTodo)
        // もし newTodoの文字が empty だったら終了
        if (newTodo == "") return;

        // todos に newTodo を追加
        setTodos([...todos, newTodo])
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
                            <li key={index}>{todo}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList