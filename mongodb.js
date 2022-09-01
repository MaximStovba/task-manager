// CRUD create read update delete

require('dotenv').config()

const { DB_URL } = process.env

const { MongoClient, ObjectId } = require('mongodb')

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

    db.collection('users')
      .find({ age: 38 })
      .toArray((error, users) => {
        console.log(users)
      })

    db.collection('tasks').findOne(
      { _id: new ObjectId('630af2a57caa59a3283cfe74') },
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
