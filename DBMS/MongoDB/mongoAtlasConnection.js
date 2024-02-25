require("dotenv").config();
const password = process.env.MONGODBATLASPASSWORD;
const db = process.env.MONGODB;
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://anjaniofficial22:${password}@firstmongodbcluster.ob1is7e.mongodb.net/?retryWrites=true&w=majority&appName=FirstMongoDbCluster`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function createDatabaseAndCollections() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Get the database instance
    const database = client.db(db);

    // Create collections
    await createMoviesCollection(database);
    await createDirectorsCollection(database);
    await createActorsCollection(database);
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log("Disconnected from MongoDB Atlas");
  }
}

async function createMoviesCollection(database) {
  await database.createCollection("movies");
  console.log("Movies collection created");
}

async function createDirectorsCollection(database) {
  await database.createCollection("directors");
  console.log("Directors collection created");
}

async function createActorsCollection(database) {
  await database.createCollection("actors");
  console.log("Actors collection created");
}

createDatabaseAndCollections();

module.exports = { client, db };
