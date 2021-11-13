const OrderModel = require('../models/order')

const orderController = {
    getOrder: async (req, res) => {
        try {
            const orders = await OrderModel.find();
            res.status(201).json({
                errCode: null,
                errDetail: null,
                data: orders
            })
        }
        catch (err) {
            return res.status(500).json({
                errCode: 1,
                errDetail: err.message,
                data: null
            });
        }

    },
    creatOrder: async (req, res) => {
        try {
            const newOrder = new OrderModel({
                ...req.body
            })
            await newOrder.save();
            res.status(201).json({
                errCode: null,
                errDetail: null,
                data: newOrder
            })

        }
        catch (err) {
            return res.status(500).json({
                errCode: 1,
                errDetail: err.message,
                data: null
            });
        }
    },
}

module.exports = orderController