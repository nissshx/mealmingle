const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

 async function run() {
  try {
    await client.connect();
    const db = client.db('mealmingle');
    const collection = db.collection('restaurants');
    const first = await collection.find().toArray();
    return first;
  } finally {
    console.log('Extracted restaurant data');
  }
}

export default run;