export async function GET(req, res) {
    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the api page")
    // get the values
    // that were sent across to us.
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')
    const pass = searchParams.get('pass')
    const tel = searchParams.get('tel')
    console.log(email);
    console.log(pass);
    console.log(tel);
    // MongoDB setup
    const { MongoClient } = require('mongodb');
    const url = 'mongodb+srv://b00146242:pjr8GtoGvI5zuPH3@cluster0.l7bzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(url);
    const dbName = 'BeyondTheScore'; // database name

    // Connect to MongoDB
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collection = db.collection('login'); // collection name

    // Query MongoDB collection
    const findResult = await collection.insertOne({ "username": email, "pass": pass });
    console.log('Found documents =>', findResult);
    // database call goes here
    // at the end of the process we need to send something back.
    return Response.json({ "data":"ok" })

    
    }
   