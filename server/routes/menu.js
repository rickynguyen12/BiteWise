import express from 'express';
const router = express.Router();
import { addMenuItem, removeMenuItem, updateMenuItem } from '../controllers/menu.js';

router.post('/add/:restaurantId', addMenuItem);
router.delete('/remove/:restaurantId/:id', removeMenuItem);
router.put('/update/:restaurantId/:id', updateMenuItem);

export default router;




