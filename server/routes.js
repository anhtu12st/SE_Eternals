const router = require('express').Router();

const { getListFoodItems } = require('./controllers/foodItem');
const { searchFood } = require('./controllers/searchFood');

router.get('/check-status', (_, res) => res.send('Server is good BROs!!!'));

router.get('/list-food-items/:categoryId', getListFoodItems);

router.get('/search-food/:searchText', searchFood);

module.exports = router;
