const faunadb = require('faunadb')
const q = faunadb.query

const serverClient = new faunadb.Client({
    secret: process.env.FAUNA_FEEDBACK_CRUD,
    // NOTE: Use the correct endpoint for your database's Region Group.
    endpoint: 'https://db.fauna.com/',
    keepAlive: false
  })
  
exports.handler = async (event, context) => {
    const negativeFeedbackDoc = await serverClient.query(
        q.Get(
            q.Ref(q.Collection('feedback'), '351575752512110659')))
        .catch((err) => console.error(
            'Error: [%s] %s: %s',
            err.name,
            err.message,
            err.errors()[0].description,
        ))
    
    console.log('returned value: ' + JSON.stringify(negativeFeedbackDoc.data))
    
    return {
        statusCode: 200,
        body: JSON.stringify(negativeFeedbackDoc.data),
    }
}