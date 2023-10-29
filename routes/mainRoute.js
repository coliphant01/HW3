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
router.get('/customers/:id/edit', customerController.getEditCustomer);
router.post('/customer', customerController.postAddCustomer);
router.post('/customers/:id/edit', customerController.postEditCustomer);
router.delete('/customer/:customerId', customerController.deleteCustomer);
router.get('/add-customer', customerController.getAddCustomer);
router.post('/add-customer', customerController.postAddCustomer);

// Routes for Items
router.get('/items', itemController.getAllItems);
router.get('/item/:itemId', itemController.getItemById);
router.post('/item', itemController.postAddItem);
router.put('/item/:itemId', itemController.postEditItem);
router.delete('/item/:itemId', itemController.deleteItem);
router.get('/add-product', itemController.getAddItem);
router.post('/add-product', itemController.postAddItem);


// Routes for Sales
router.get('/sales', salesController.getAllSales);
router.get('/sale/:salesId', salesController.getSaleById);
router.post('/sale', salesController.postAddSale);
router.put('/sale/:salesId', salesController.postEditSale);
router.delete('/sale/:salesId', salesController.deleteSale);

module.exports = router;

