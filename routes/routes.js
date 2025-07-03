 const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// Middleware (basic inline)
const validate = (req, res, next) => {
  const { name, price, category, inStock } = req.body;
  if (!name || typeof name !== 'string') return res.status(400).json({ message: 'Invalid name' });
  if (typeof price !== 'number') return res.status(400).json({ message: 'Invalid price' });
  if (!category || typeof category !== 'string') return res.status(400).json({ message: 'Invalid category' });
  if (typeof inStock !== 'boolean') return res.status(400).json({ message: 'Invalid inStock' });
  next();
};

// Routes
router.get('/', controller.getAllProducts);
router.get('/stats', controller.getStats);
router.get('/:id', controller.getProductById);
router.post('/', validate, controller.createProduct);
router.put('/:id', validate, controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;
