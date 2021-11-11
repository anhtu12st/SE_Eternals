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

    const result = [
      ...new Map(
        [...food, ...category].map((item) => [item['title'], item])
      ).values(),
    ];

    res.json(result);
  } catch (err) {
    next(err);
  }
};
