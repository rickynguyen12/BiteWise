import Order from '../models/order.js';

const createOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteOrder = async (req, res) => {
    const { orderNumber } = req.params;
    try {
        const deletedOrder = await Order.findOneAndDelete({ orderNumber });
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const acceptOrder = async (req, res) => {
    const { orderNumber } = req.params.orderNumber;
    try {
        // Find the order by orderNumber
        const order = await Order.findOne({ orderNumber });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.status = 'accepted';

        order.updatedAt = new Date();

        await order.save();

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const rejectOrder = async (req, res) => {
    const { orderNumber } = req.params.orderNumber;
    try {
        // Find the order by orderNumber
        const order = await Order.findOne({ orderNumber });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.status = 'rejected'; 
        
        order.updatedAt = new Date();

        await order.save();

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



export { deleteOrder };
export { createOrder };
export { rejectOrder };
export { acceptOrder };