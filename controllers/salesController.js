const Sales = require('../models/salesModel');

exports.getAllSales = (req, res, next) => {
    Sales.fetchCurrentMonthSales()
        .then(([sales, fieldData]) => {
            res.render('sales', {
                sales: sales,
                pageTitle: 'All Sales'
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
                    pageTitle: 'Sale Details'
                });
            } else {
                res.redirect('/sales'); // Redirect back to list if ID not found
            }
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAddSale = (req, res, next) => {
    res.render('sales/add', {
        pageTitle: 'Add Sale'
    });
};

exports.postAddSale = (req, res, next) => {
    const sale = new Sales(null, req.body.customerId, req.body.itemId, req.body.quantity, req.body.salesDate);
    sale.save()
        .then(() => {
            res.redirect('/sales');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEditSale = (req, res, next) => {
    Sales.findById(req.params.id)
        .then(([sale, fieldData]) => {
            if (sale.length > 0) {
                res.render('sales/edit', {
                    sale: sale[0],
                    pageTitle: 'Edit Sale'
                });
            } else {
                res.redirect('/sales');
            }
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postEditSale = (req, res, next) => {
    const sale = new Sales(req.body.id, req.body.customerId, req.body.itemId, req.body.quantity, req.body.salesDate);
    sale.update()
        .then(() => {
            res.redirect('/sales');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.deleteSale = (req, res, next) => {
    Sales.deleteById(req.body.id)
        .then(() => {
            res.redirect('/sales');
        })
        .catch(err => {
            console.log(err);
        });
};
