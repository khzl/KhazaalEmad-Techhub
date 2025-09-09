const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const validate = require('../middleware/validateProduct');

router.post('/' , validate.create , controller.create);
router.get('/' , controller.GetAll);
router.get('/:id' , controller.GetById);
router.put('/:id' , validate.update , controller.update);
router.delete('/:id' , controller.remove);

module.exports = router;