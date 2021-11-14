const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String },
        cardName: { type: String },
        cardNumber: { type: String },
        CVVNumber: { type: Number },
        validDate: { type: Date },
        total: { type: Number, required: true },
        totalAmount: { type: Number, required: true },
        items: [{ title: String, quantity: Number }],
        type: { type: String, required: true }
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

orderSchema.set('toJSON', { getters: true });
orderSchema.options.toJSON.transform = (doc, ret) => {
    const obj = { ...ret };
    delete obj._id;
    delete obj.__v;
    return obj;
};

module.exports = mongoose.model('Order', orderSchema);