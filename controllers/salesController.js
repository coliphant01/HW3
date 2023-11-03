const Sales = require('../models/salesModel');

exports.getAllSales = (req, res, next) => {
    Sales.fetchCurrentMonthSales()
        .then(([sales, fieldData]) => {
            res.render('sales', {
                sales: sales,
                pageTitle: 'All Sales',
                current: 'sales'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getSaleById = (req, res, next) => {
    Sales.findById(req.params.id)
        .then(([sale, fieldData]) => {
            if (sale.length > 0) {
                res.render('sales/detail', {
                    sale: sale[0],
                    pageTitle: 'Sale Details',
                    current: 'sales'
                });
            } else {
                res.redirect('/sales');
            }
        })
        .catch(err => {
            console.log(err);
        });
};


