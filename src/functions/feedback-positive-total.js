const faunadb = require('faunadb')
const q = faunadb.query

// Documentation here helped write the query to get
// data from a Collection
// https://docs.fauna.com/fauna/current/learn/understanding/documents

const serverClient = new faunadb.Client({
    secret: process.env.FAUNA_FEEDBACK_CRUD,
    // NOTE: Use the correct endpoint for your database's Region Group.
    endpoint: 'https://db.fauna.com/',
    keepAlive: false
  })
  
exports.handler = async (event, context) => {
    const positiveFeedbackDoc = await serverClient.query(
        q.Get(
            q.Ref(q.Collection('feedback'), '351576153201311811')))
        .catch((err) => console.error(
            'Error: [%s] %s: %s',
            err.name,
            err.message,
            err.errors()[0].description,
        ))
    
    console.log('returned value: ' + JSON.stringify(positiveFeedbackDoc.data))
    
    return {
        statusCode: 200,
        body: JSON.stringify(positiveFeedbackDoc.data),
    }
}