const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

// .envファイル読み込み 
dotenv.config()

const HOST = process.env.HOST
const PORT = process.env.PORT

// console.log(HOST, PORT)

//Expressの作成
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

// Stop server => Ctrl + C
// Response
app.get('/', (req, res) => {
    res.send('Hello, express server!!');
})

// Webサーバを待機（listen）
app.listen(PORT, HOST, () => {
    console.log(`Server listen... http://${HOST}:${PORT}`)
})