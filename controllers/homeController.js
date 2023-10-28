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
                sales: fetchedSales
            });
        })
        .catch(err => {
            console.log(err);
        });
};

// exports.getHome = (req, res) => {
//     let fetchedCustomers, fetchedItems;
//
//     Customer.fetchAll()
//         .then(([customers]) => {
//             console.log('Fetched Customers:', customers);
//             fetchedCustomers = customers;
//             return Item.fetchAll();
//         })
//         .then(([items]) => {
//             console.log('Fetched Items:', items);
//             fetchedItems = items;
//             return Sales.fetchAll();
//         })
//         .then(([sales]) => {
//             // Calculate TotalSales for each customer
//             console.log('Fetched Sales:', sales);
//             fetchedCustomers.forEach(customer => {
//                 const customerSales = sales.filter(sale => sale.CustomerID === customer.CustomerID);
//                 let total = 0;
//                 customerSales.forEach(sale => {
//                     const item = fetchedItems.find(item => item.ItemID === sale.ItemID);
//                     if (item) {
//                         total += sale.Quantity * item.ItemPrice;
//                     }
//                 });
//                 customer.TotalSales = total;
//             });
//
//             // Calculate TotalSales for each product
//             fetchedItems.forEach(item => {
//                 const itemSales = sales.filter(sale => sale.ItemID === item.ItemID);
//                 let total = 0;
//                 itemSales.forEach(sale => {
//                     total += sale.Quantity * item.ItemPrice;
//                 });
//                 item.TotalSales = total;
//             });
//
//             // Calculate Sales by Month
//             const salesByMonth = {};
//             sales.forEach(sale => {
//                 const saleDate = new Date(sale.SalesDate);
//                 const monthYear = `${saleDate.toLocaleString('default', { month: 'long' })} ${saleDate.getFullYear()}`;
//                 if (!salesByMonth[monthYear]) {
//                     salesByMonth[monthYear] = 0;
//                 }
//                 const item = fetchedItems.find(item => item.ItemID === sale.ItemID);
//                 if (item) {
//                     salesByMonth[monthYear] += sale.Quantity * item.ItemPrice;
//                 }
//             });
//
//             const salesData = Object.keys(salesByMonth).map(month => ({
//                 Date: month,
//                 TotalSales: salesByMonth[month]
//             })).sort((a, b) => b.TotalSales - a.TotalSales); // Sorting by TotalSales
//
//             res.render('home', {
//                 customers: fetchedCustomers,
//                 products: fetchedItems,
//                 sales: salesData
//             });
//         })
//         .catch(err => {
//             console.error('Error encountered:', err);
//             res.status(500).render('home', {
//                 error: 'An error occurred'//,
//             });
//         });
// };




