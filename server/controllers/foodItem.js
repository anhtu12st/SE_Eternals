const FoodItemModel = require('../models/foodItem');

exports.getListFoodItems = async (req, res, next) => {
	try {
		const { categoryId } = req.params;

		const listFoodItems = await FoodItemModel.find({ category: [categoryId.toLowerCase()] });

		res.json(listFoodItems);
	} catch (err) {
		next(err);
	}
}