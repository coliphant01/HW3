const express = require('express');
const router = express.Router();

// Importing the controllers
const homeController = require('../controllers/homeController'); // Importing the homeController
const customerController = require('../controllers/customerController');
const itemController = require('../controllers/itemController');
const salesController = require('../controllers/salesController');

// Route for Home
router.get('/', homeController.getHomePage); // Updated to use homeController
router.get('/products', itemController.getAllItems);


// Routes for Customers
router.get('/customers', customerController.getAllCustomers);
router.get('/customer/:customerId', customerController.getCustomerById);
router.post('/customer', customerController.postAddCustomer);
router.put('/customer/:customerId', customerController.postEditCustomer);
router.delete('/customer/:customerId', customerController.deleteCustomer);

// Routes for Items
router.get('/items', itemController.getAllItems);
router.get('/item/:itemId', itemController.getItemById);
router.post('/item', itemController.postAddItem);
router.put('/item/:itemId', itemController.postEditItem);
router.delete('/item/:itemId', itemController.deleteItem);

// Routes for Sales
router.get('/sales', salesController.getAllSales);
router.get('/sale/:salesId', salesController.getSaleById);
router.post('/sale', salesController.postAddSale);
router.put('/sale/:salesId', salesController.postEditSale);
router.delete('/sale/:salesId', salesController.deleteSale);

module.exports = router;

