import express from 'express';
import { acceptOrder, rejectOrder, deleteOrder, createOrder } from '../controllers/order.js';

const router = express.Router();

router.post('/create', createOrder);

// delete order by orderNumber
router.delete('/delete/:orderNumber', deleteOrder);

// route to accept an order by orderNumber for merchant
router.put('/accept/:orderNumber', acceptOrder);

router.put('/reject/:orderNumber', rejectOrder);
export default router;
