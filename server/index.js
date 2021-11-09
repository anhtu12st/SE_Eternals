require('dotenv').config();
const config = require('./config');
const server = require('http').createServer();
const expressApp = require('./app');
const { connectDb } = require('./utils/mongoDb');

const FoodItemModel = require('./models/foodItem');

connectDb(config.mongoUrl).then(() => {
  console.log('SERVER CONNECTED TO MONGODB');
  server.on('request', expressApp);

  server.listen(config.port, () => {
    console.info(`SERVER IS RUNNING AT PORT ${config.port}`);
  });
});
