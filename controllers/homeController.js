const Customer = require('../models/customerModel');
const Item = require('../models/itemModel');
const Sales = require('../models/salesModel');

exports.getHomePage = (req, res, next) => {
    let fetchedCustomers, fetchedProducts, fetchedSales;

    Customer.fetchTopCustomersBySales()
        .then(([customers]) => {
            fetchedCustomers = customers;
            return Item.fetchTopProductsBySales();
        })
        .then(([products]) => {
            fetchedProducts = products;
            return Sales.fetchTopSalesByMonth();
        })
        .then(([sales]) => {
            fetchedSales = sales;
            res.render('home', {
                customers: fetchedCustomers,
                products: fetchedProducts,
                sales: fetchedSales,
                current: 'home'
            });
        })
        .catch(err => {
            console.log(err);
        });
};




