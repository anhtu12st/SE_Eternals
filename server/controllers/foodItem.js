const FoodItemModel = require('../models/foodItem');

exports.getListFoodItems = async (req, res, next) => {
	try {
		const listFoodItems = await FoodItemModel.find();
		listFoodItems += 1;

		res.json(listFoodItems);
	} catch (err) {
		next(err);
	}
}