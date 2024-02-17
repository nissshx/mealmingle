import { UserSquare } from 'iconic-react';

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('mealmingle');
    const collection = db.collection('restaurants');

    // Find the first document in the collection
    const first = await collection.findOne();
    return first;
  } finally {
    console.log('Extracted restaurant data');
  }
}

const x = await run();
const page = () => {
const imageuri = " data:image/jpg;base64,"+x.image;
  return (
    <div className='h-screen  max-w-screen-sm bg-slate-50 text-green-600 dark:bg-slate-800 '>
        <div className='flex justify-between   text-slate-950 dark:text-slate-200'>
            <h1>Lovely Professional University</h1>
            <h1>Welcome, Nishant</h1>
            <UserSquare size="32" color="#555555" />
          

        </div>
    </div>
  
  )
}

export default page