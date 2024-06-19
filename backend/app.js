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

const todoRoutes = require('./routes/todoRoute')
app.use('/api', todoRoutes)

// Stop server => Ctrl + C
// Response
app.get('/', (req, res) => {
    res.send('Hello!!!!');
})

app.get('/profile', (req, res) => {
    res.send("My name is Yohei.");
})

app.get('/api/weather/:id', (req, res) => {
    //TODO: DB search
    var weather = {
        place: '横浜市旭区',
        weather: 'fine',
        max_temperature: 27,
        min_temperature: 16,
    }
    res.json(weather);
})

// Webサーバを待機（listen）
app.listen(PORT, HOST, () => {
    console.log(`Server listen... http://${HOST}:${PORT}`)
})