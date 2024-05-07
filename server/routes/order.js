import express from 'express';
import { acceptOrder, getAllOrders, deleteOrder, createOrder } from '../controllers/order.js';

const router = express.Router();

router.post('/create', createOrder);

// delete order by orderNumber
router.delete('/delete/:orderNumber', deleteOrder);

// route to accept an order by orderNumber for merchant
router.put('/accept/:orderNumber', acceptOrder);

export default router;
