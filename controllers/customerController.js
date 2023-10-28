const Customer = require('../models/customerModel');
const Sales = require('../models/salesModel');


exports.getAllCustomers = (req, res, next) => {
    Customer.fetchAll()
        .then(([customers, fieldData]) => {
            res.render('customers', {
                customers: customers,
                pageTitle: 'All Customers'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getCustomerById = (req, res, next) => {
    Customer.findById(req.params.id)
        .then(([customer, fieldData]) => {
            if (customer.length > 0) {
                res.render('customer/detail', {
                    customer: customer[0],
                    pageTitle: 'Customer Details'
                });
            } else {
                res.redirect('/customers'); // Redirect back to list if ID not found
            }
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAddCustomer = (req, res, next) => {
    res.render('customer/add', {
        pageTitle: 'Add Customer'
    });
};

exports.postAddCustomer = (req, res, next) => {
    const customer = new Customer(null, req.body.name, req.body.email);
    customer.save()
        .then(() => {
            res.redirect('/customers');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEditCustomer = (req, res, next) => {
    Customer.findById(req.params.id)
        .then(([customer, fieldData]) => {
            if (customer.length > 0) {
                res.render('customer/edit', {
                    customer: customer[0],
                    pageTitle: 'Edit Customer'
                });
            } else {
                res.redirect('/customers');
            }
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postEditCustomer = (req, res, next) => {
    const customer = new Customer(req.body.id, req.body.name, req.body.email);
    customer.update()
        .then(() => {
            res.redirect('/customers');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.deleteCustomer = (req, res, next) => {
    Customer.deleteById(req.body.id)
        .then(() => {
            res.redirect('/customers');
        })
        .catch(err => {
            console.log(err);
        });
};



