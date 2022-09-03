require('dotenv').config()

const mongoose = require('mongoose')

const { DB_URL } = process.env

const databaseName = 'task-manager'

mongoose.connect(`mongodb://${DB_URL}:27017/${databaseName}`)

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
})

// const me = new User({
//   name: 'Andrew',
//   age: '31',
// })

// me.save()
//   .then(() => {
//     console.log(me)
//   })
//   .catch((error) => {
//     console.log('Error!', error)
//   })

const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
})

const task = new Task({
  description: 'Learn the Mongoose library',
  completed: false,
})

task
  .save()
  .then(() => {
    console.log(task)
  })
  .catch((error) => {
    console.log(error)
  })
