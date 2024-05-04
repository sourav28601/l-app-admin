const {Cart} = require('../models');

// Create a new Cart
exports.addCart = async (req, res) => {
    try {
        const {count,user_id,product_id}=req.body;
        const order = await Cart.create({count,user_id,product_id});
        res.status(201).json({ status: 'success', data: order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};
// Get all Cart
exports.getAllCartData = async (req, res) => {
    try {
        const orders = await Cart.findAll();
        res.status(200).json({ status: 'success', data: orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};
// Get an Cart
exports.getCartDataById = async (req, res) => {
    try {
        const order = await Cart.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ status: 'error', message: 'Order not found' });
        }
        res.status(200).json({ status: 'success', data: order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};
// Update an cart
exports.updatCartData = async (req, res) => {
    try {
        const order = await Cart.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ status: 'error', message: 'Order not found' });
        }
        await order.update(req.body);
        res.status(200).json({ status: 'success', data: order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};
// Delete an cart by id
exports.deleteCartData = async (req, res) => {
    try {
        const order = await Cart.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ status: 'error', message: 'Order not found' });
        }
        await order.destroy();
        res.status(204).json({ status: 'success', message: 'Order deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};
