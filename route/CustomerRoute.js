const express= require('express');
const customerController = require('../controller/CustomerController');

const router = express.Router();

router.post('/save',customerController.saveCustomer)
router.put('/update',customerController.updateCustomer)
router.get('/get',customerController.getCustomer)
router.delete('/delete',customerController.deleteCustomer)
router.get('/getAll',customerController.getAllCustomers)
router.get('/search',customerController.searchCustomers)

module.exports = router;

