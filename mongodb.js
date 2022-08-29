// CRUD create read update delete

require('dotenv').config()

const { DB_URL } = process.env

const { MongoClient } = require('mongodb')

const connectionURL = `mongodb://${DB_URL}:27017`
const databaseName = 'task-manager'

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne(
    //   { _id: new ObjectID('5c1113239cbfe605241f9071') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    //   }
    // )

    db.collection('users')
      .find({ age: 27 })
      .toArray((error, users) => {
        console.log(users)
      })

    db.collection('tasks').findOne(
      { _id: '5c0fec243ef6bdfbe1d62e2f' },
      (error, task) => {
        console.log(task)
      }
    )

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks)
      })
  }
)
