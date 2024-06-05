const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

// .envファイル読み込み 
dotenv.config()

const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST, PORT)