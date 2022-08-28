// CRUD create read update delete

require('dotenv').config()

const { DB_URL } = process.env

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

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

    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result)
    // })

    db.collection('tasks').insertMany(
      [
        {
          description: 'Clean the house',
          completed: true,
        },
        {
          description: 'Renew inspection',
          completed: false,
        },
        {
          description: 'Pot plants',
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert tasks!')
        }

        console.log(result)
      }
    )
  }
)
