require('dotenv').config()

const mongoose = require('mongoose')
const { DB_URL } = process.env
const databaseName = 'task-manager'

mongoose.connect(`mongodb://${DB_URL}:27017/${databaseName}`)
