require('dotenv').config()

const mongoose = require('mongoose')
const { DB_URL } = process.env
const databaseName = 'task-manager'

mongoose.connect(`mongodb://${DB_URL}:27017/${databaseName}`)

// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// })

// const task = new Task({
//   description: 'Eat lunch',
// })

// task
//   .save()
//   .then(() => {
//     console.log(task)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
