const router = require('express').Router();

const { getListFoodItems } = require('./controllers/foodItem');

router.get('/check-status', (_, res) => res.send("Server is good BROs!!!"));

router.get('/list-food-items/:categoryId', getListFoodItems);

module.exports = router;