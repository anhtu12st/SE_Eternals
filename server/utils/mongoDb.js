const mongoose = require('mongoose');

let cachedDb;

const connectToDatabase = (connectionString) => {
  if (
    cachedDb
    && cachedDb.connections
    && cachedDb.connections[0]
    && cachedDb.connections[0].readyState
  ) {
    return Promise.resolve(cachedDb);
  }

  return (
    mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then((db) => {
        cachedDb = db;
      })
      .then(() => cachedDb)
      .catch(() => {
        setTimeout(connectToDatabase, 3000);
      })
  );
};

module.exports = {
  connectDb: connectToDatabase,
};
