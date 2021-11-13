const router = require('express').Router();

const { getListFoodItems } = require('./controllers/foodItem');
const { searchFood } = require('./controllers/searchFood');
const orderController = require('./controllers/createOrder');


router.get('/check-status', (_, res) => res.send('Server is good BROs!!!'));

router.get('/list-food-items/:categoryId', getListFoodItems);

router.get('/search-food/:searchText', searchFood);

//payment
router.route('/payment')
    .get(orderController.getOrder)
    .post(orderController.creatOrder)

module.exports = router;
