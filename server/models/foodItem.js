const mongoose = require('mongoose');

const { Schema } = mongoose;

const categories = ["Drink", 'Pizza', 'Hot pot', 'Cake', 'Sushi', 'Noodles', 'Rice box'];

const foodItemSchema = new Schema(
	{
		title: { type: String, required: true, unique: true },
		description: { type: String, required: true },
		imgUrl: { type: String, required: true },
		price: { type: Number, required: true },
		category: [{ type: String, enum: categories, required: true }]
	},
	{ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

foodItemSchema.set('toJSON', { getters: true });
foodItemSchema.options.toJSON.transform = (doc, ret) => {
	const obj = { ...ret };
	delete obj._id;
	delete obj.__v;
	return obj;
};

module.exports = mongoose.model('FoodItem', foodItemSchema);