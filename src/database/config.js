const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true });
let db = null

const initConnection = async () => {
  try {
    await client.connect()
    db = client.db(process.env.DATABASE_NAME);
    console.log(`Connected to ${process.env.DATABASE_NAME}`);
  } catch (err) {
    console.error(err)
    throw err
  }
}

const getClient = () => client
const getDatabase = () => db
const newSession = () => client.startSession()
const getCollection = (collectionName) => db.collection(collectionName)
const disconnect = () => client.close()

module.exports = {
  initConnection,
  getClient,
  getDatabase,
  newSession,
  getCollection,
  disconnect
}