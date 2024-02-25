const { client, db } = require("../mongoAtlasConnection");
process.stdin.setEncoding("utf8");

async function queries() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Get the database instance
    const database = client.db(db);

    const directorsCollection = database.collection("directors");
    const actorsCollection = database.collection("actors");
    const moviesCollection = database.collection("movies");
    // Insert directors
    const result = [];
    //Find all movies released in a specific year:
    result.push(moviesCollection.find({ release_year: 1994 }));
    result.push(moviesCollection.find({ genre: "Drama" }));

    console.log("Enter directorname:");
    let directorName;
    process.stdin.on("data", function (chunk) {
      directorName = chunk.trim();
      console.log("You entered:", input);
      //process.exit(); // Exit the process after receiving input
    });

    const director = await directorsCollection.findOne({ name: directorName });
    result.push(moviesCollection.find({ director: ObjectId(director._id) }));

    console.log("Enter directorname:");
    let actorName;
    process.stdin.on("data", function (chunk) {
      actorName = chunk.trim();
      console.log("You entered:", input);
      process.exit(); // Exit the process after receiving input
    });

    const actor = await actorsCollection.findOne({ name: actorName });

    result.push(moviesCollection.find({ actor: ObjectId(actor._id) }));
    result.push(
      directorsCollectionCollection.find({ nationality: "American" })
    );
    result.push(actorsCollectionCollection.find({ nationality: "American" }));
  } catch (error) {
    console.error("Error executing queries:", error);
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log("Disconnected from MongoDB Atlas");
  }
}
