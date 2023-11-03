const Item = require('../models/itemModel');

exports.getAllItems = (req, res, next) => {
    Item.fetchAll()
        .then(([items, fieldData]) => {
            res.render('products', {
                items: items,
                pageTitle: 'All Items',
                current: 'products'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getItemById = (req, res, next) => {
    Item.findById(req.params.id)
        .then(([item, fieldData]) => {
            if (item.length > 0) {
                res.render('item/detail', {
                    item: item[0],
                    pageTitle: 'Item Details',
                    current: 'products'
                });
            } else {
                res.redirect('/items');
            }
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAddItem = (req, res, next) => {
    res.render('item/add', {
        pageTitle: 'Add Item',
        current: 'products'
    });
};

exports.postAddItem = (req, res, next) => {
    const item = new Item(null, req.body.name, req.body.price);
    item.save()
        .then(() => {
            res.redirect('/items');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEditItem = (req, res, next) => {
    Item.findById(req.params.id)
        .then(([item, fieldData]) => {
            if (item.length > 0) {
                res.render('item/edit', {
                    item: item[0],
                    pageTitle: 'Edit Item',
                    current: 'products'
                });
            } else {
                res.redirect('/items');
            }
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAddItem = (req, res, next) => {
    res.render('addProduct', {
        pageTitle: 'Add New Product',
        current: 'products'
    });
};

exports.postAddItem = (req, res, next) => {
    const productName = req.body.ItemName;
    const productPrice = req.body.ItemPrice;


    const product = new Item(null, productName, productPrice);
    product.save()
        .then(() => {
            res.redirect('/products');
        })
        .catch(err => {
            console.log(err);
        });
};

