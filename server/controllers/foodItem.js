const FoodItemModel = require('../models/foodItem');

exports.getListFoodItems = async (req, res) => {
	const listFoodItems = await FoodItemModel.find();

	res.json(listFoodItems);
}