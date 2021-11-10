const FoodItemModel = require('../models/foodItem');

exports.searchFood = async (req, res, next) => {
  try {
    const { searchText } = req.params;

    const food = await FoodItemModel.find({
      title: { $regex: searchText, $options: 'i' },
    });

    const category = await FoodItemModel.find({
      category: { $regex: searchText, $options: 'i' },
    });

    let result = [...food, ...category];

    res.json(result);
  } catch (err) {
    next(err);
  }
};
