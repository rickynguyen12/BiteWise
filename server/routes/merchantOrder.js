import { merchant } from '../models/merchant.js';

// Route to get a merchant by restaurant ID
app.get('/merchants/:restaurantId', async (req, res) => {
    try {
        const foundMerchant = await merchant.findOne({ restaurant_id: req.params.restaurantId });
        if (!foundMerchant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.json(foundMerchant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get active orders for a merchant by restaurant ID
app.get('/merchants/:restaurantId/active-orders', async (req, res) => {
    try {
        const foundMerchant = await merchant.findOne({ restaurant_id: req.params.restaurantId });
        if (!foundMerchant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        const activeOrders = foundMerchant.activeorders || [];
        res.json(activeOrders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
