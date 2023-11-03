const express = require('express');
const router = express.Router();

// Importing the controllers
const homeController = require('../controllers/homeController'); // Importing the homeController
const customerController = require('../controllers/customerController');
const itemController = require('../controllers/itemController');
const salesController = require('../controllers/salesController');

// Route for Home
router.get('/', homeController.getHomePage);
router.get('/products', itemController.getAllItems);


// Routes for Customers
router.get('/customers', customerController.getAllCustomers);
router.get('/customer/:customerId', customerController.getCustomerById);
router.get('/customers/:id/edit', customerController.getEditCustomer);
router.post('/customer', customerController.postAddCustomer);
router.post('/customers/:id/edit', customerController.postEditCustomer);
router.get('/add-customer', customerController.getAddCustomer);
router.post('/add-customer', customerController.postAddCustomer);

// Routes for Items
router.get('/items', itemController.getAllItems);
router.get('/item/:itemId', itemController.getItemById);
router.post('/item', itemController.postAddItem);

router.get('/add-product', itemController.getAddItem);
router.post('/add-product', itemController.postAddItem);


// Routes for Sales
router.get('/sales', salesController.getAllSales);
router.get('/sale/:salesId', salesController.getSaleById);

module.exports = router;

