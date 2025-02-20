export async function GET(req, res) {
  console.log("in the api page");

  const { MongoClient } = require("mongodb");
  const url =
    "mongodb+srv://b00146242:pjr8GtoGvI5zuPH3@cluster0.l7bzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(url);
  const dbName = "BeyondTheScore"; // database name
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("stats"); // collection name
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return Response.json(findResult);
}
