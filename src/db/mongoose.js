require('dotenv').config()

const mongoose = require('mongoose')
const validator = require('validator')

const { DB_URL } = process.env

const databaseName = 'task-manager'

mongoose.connect(`mongodb://${DB_URL}:27017/${databaseName}`)

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"')
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a postive number')
      }
    },
  },
})

const me = new User({
  name: 'Maxim',
  age: '39',
  email: 'max@mail.com',
  password: 'phone098!',
})

me.save()
  .then(() => {
    console.log(me)
  })
  .catch((error) => {
    console.log('Error!', error)
  })

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

const task = new Task({
  description: 'Eat lunch',
})

task
  .save()
  .then(() => {
    console.log(task)
  })
  .catch((error) => {
    console.log(error)
  })
