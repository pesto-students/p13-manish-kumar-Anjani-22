// insertMovies.js

const { client, db } = require("../mongoAtlasConnection");

async function insert() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Get the database instance
    const database = client.db(db);

    const directorsCollection = database.collection("directors");
    // Insert directors
    const directorIds = directorsCollection.insertMany([
      {
        name: "Frank Darabont",
        nationality: "American",
        movies_directed: [],
      },
      {
        name: "Francis Ford Coppola",
        nationality: "German",
        movies_directed: [],
      },
      {
        name: "Darabont",
        nationality: "American",
        movies_directed: [],
      },
      {
        name: "Coppola",
        nationality: "france",
        movies_directed: [],
      },
      {
        name: "Ford",
        nationality: "London",
        movies_directed: [],
      },
    ]).insertedIds;

    //actors
    // Insert actors
    const actorsCollection = database.collection("actors");
    const actorIds = actorsCollection.insertMany([
      {
        name: "Morgan Freeman",
        nationality: "American",
        movies_actedin: [],
      },
      {
        name: "Tim Robbins",
        nationality: "American",
        movies_actedin: [],
      },
      {
        name: "Morgan ",
        nationality: "London",
        movies_actedin: [],
      },
      {
        name: "Tim ",
        nationality: "London",
        movies_actedin: [],
      },
      {
        name: "Freeman",
        nationality: "France",
        movies_actedin: [],
      },
      {
        name: "Robbins",
        nationality: "France",
        movies_actedin: [],
      },
      {
        name: "Morgan rocstar Freeman",
        nationality: "German",
        movies_actedin: [],
      },
      {
        name: "Tim cool Robbins",
        nationality: "German",
        movies_actedin: [],
      },
      // Add more actors...
    ]).insertedIds;

    // Get the movies collection
    const moviesCollection = database.collection("movies");

    const moviesDoc = [
      {
        title: "The Shawshank Redemption",
        release_year: 1994,
        genre: "Drama",
        director: directorIds[0],
        actors: [actorIds[0], actorIds[1]],
      },
      {
        title: "The Godfather",
        release_year: 1972,
        genre: "Crime",
        director: directorIds[1],
        actors: [actorIds[2], actorIds[3]],
      },
      {
        title: "The  Redemption",
        release_year: 1994,
        genre: "Drama",
        director: directorIds[3],
        actors: [actorIds[5], actorIds[7]],
      },
      {
        title: "The cool Godfather",
        release_year: 1972,
        genre: "Crime",
        director: directorIds[7],
        actors: [actorIds[2], actorIds[5]],
      },
      {
        title: "Redemption",
        release_year: 1894,
        genre: "Drama",
        director: directorIds[2],
        actors: [actorIds[0], actorIds[6]],
      },
      {
        title: "The help of Godfather",
        release_year: 1902,
        genre: "Crime",
        director: directorIds[3],
        actors: [actorIds[2], actorIds[5]],
      },
      {
        title: "Redemption Hunt",
        release_year: 1984,
        genre: "Drama",
        director: directorIds[2],
        actors: [actorIds[0], actorIds[4]],
      },
      {
        title: "The Goher",
        release_year: 1972,
        genre: "Crime",
        director: directorIds[1],
        actors: [actorIds[5], actorIds[3]],
      },
      {
        title: "The shank Redemption",
        release_year: 1994,
        genre: "Drama",
        director: directorIds[0],
        actors: [actorIds[3], actorIds[1]],
      },
      {
        title: "The father",
        release_year: 2012,
        genre: "Crime",
        director: directorIds[1],
        actors: [actorIds[2], actorIds[6]],
      },
      // Add more movies...
    ];

    moviesDoc.forEach((doc) => {
      const movieId = moviesCollection.insertOne(doc);
      doc.actors.forEach((actorId) => {
        update("actors", actorId, movieId, "movies_actedin");
      });

      update("directors", doc.director, movieId, "movies_directed");
    });

    var moviesId = moviesCollection.insertMany();

    console.log(`${result.insertedCount} movies inserted`);
  } catch (error) {
    console.error("Error inserting movies:", error);
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log("Disconnected from MongoDB Atlas");
  }
}

async function update(
  collectionName,
  targetid,
  referenceIdAttribute,
  referenceId
) {
  await collectionName.updateOne(
    { _id: targetid },
    { $push: { referenceIdAttribute: referenceId } }
  );
}

insert();
