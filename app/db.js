import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        const db = conn.connection.useDb("mealmingle");

        // Access the 'restaurants' collection
        const restaurantsCollection = db.collection("restaurants");
    
        // Find all documents and convert to an array
        const allRestaurants = await restaurantsCollection.find({}).toArray();
    
        // Output the restaurants (this is where you'd handle the data)
        console.log(allRestaurants);
    
        console.log(databases);
    }
    catch ( error ) {
        console.log("Check Connection");
    }}
    

    
    export default connectDB;