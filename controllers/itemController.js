const Item = require('../models/itemModel');

exports.getAllItems = (req, res, next) => {
    Item.fetchAll()
        .then(([items, fieldData]) => {
            res.render('products', {
                items: items,
                pageTitle: 'All Items'
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
                    pageTitle: 'Item Details'
                });
            } else {
                res.redirect('/items'); // Redirect back to list if ID not found
            }
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAddItem = (req, res, next) => {
    res.render('item/add', {
        pageTitle: 'Add Item'
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
                    pageTitle: 'Edit Item'
                });
            } else {
                res.redirect('/items');
            }
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postEditItem = (req, res, next) => {
    const item = new Item(req.body.id, req.body.name, req.body.price);
    item.update()
        .then(() => {
            res.redirect('/items');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.deleteItem = (req, res, next) => {
    Item.deleteById(req.body.id)
        .then(() => {
            res.redirect('/items');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAddItem = (req, res, next) => {
    res.render('addProduct', {
        pageTitle: 'Add New Product'
    });
};

exports.postAddItem = (req, res, next) => {
    const productName = req.body.ItemName;
    const productPrice = req.body.ItemPrice;
    // Capture other fields as necessary

    const product = new Item(null, productName, productPrice); // Adjust constructor accordingly
    product.save()
        .then(() => {
            res.redirect('/products'); // Redirect to the product list page after adding
        })
        .catch(err => {
            console.log(err);
        });
};

