const express = require('express')
const router = express.Router();

router.get('/todo/get', (req, res) => {
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
    ]
    res.json(todos) 
})

module.exports = router