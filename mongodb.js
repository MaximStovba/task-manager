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

    // db.collection('users')
    //   .find({ age: 39 })
    //   .toArray((error, users) => {
    //     console.log(users)
    //   })

    // db.collection('tasks').findOne(
    //   { _id: new ObjectId('630af2a57caa59a3283cfe74') },
    //   (error, task) => {
    //     console.log(task)
    //   }
    // )

    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks)
    //   })

    // db.collection('users')
    //   .updateOne(
    //     {
    //       _id: new ObjectId('6307cd5ea4b9d57aa016670c'),
    //     },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

    db.collection('tasks')
      .updateMany(
        {
          completed: false,
        },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((result) => {
        console.log(result.modifiedCount)
      })
      .catch((error) => {
        console.log(error)
      })
  }
)
