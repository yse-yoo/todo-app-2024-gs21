const express = require('express')
const router = express.Router();

// get todos
router.get('/todo/get', (req, res) => {
    //TODO: データーベースからtodosのデータを取得

    var todos = [
        { 
            id: 1,
            title: "買い物",
            completed: false,
        },
        { 
            id: 2,
            title: "アルバイト",
            completed: false,
        },
        { 
            id: 3,
            title: "銀行に行く",
            completed: false,
        },
        { 
            id: 4,
            title: "就職活動",
            completed: false,
        },
    ]
    res.json(todos) 
})

// fetch todo
router.get('/todo/fetch/:id', (req, res) => {
    // TODO:データベースから idで検索して、todoデータを取得

    const { id } = req.params;
    res.json({id});
})

// add todo(POSTリクエスト)
router.post('/todo/add', (req, res) => {
    // TODO: データベースにデータを保存

    const data = req.body;
    console.log(data)
    const todo = { 
        id: 1,
        title: data.title, 
        comleted: false
    }
    res.json(todo);
})

module.exports = router