const db = require('../util/database');
class Sales {
    constructor(id, customerId, itemId, quantity, salesDate) {
        this.SalesID = id;
        this.CustomerID = customerId;
        this.ItemID = itemId;
        this.Quantity = quantity;
        this.SalesDate = salesDate;
    }

    save() {
        return db.execute('INSERT INTO sales (CustomerID, ItemID, Quantity, SalesDate) VALUES (?, ?, ?, ?)', [this.CustomerID, this.ItemID, this.Quantity, this.SalesDate]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM sales');
    }

    static findById(id) {
        return db.execute('SELECT * FROM sales WHERE SalesID = ?', [id]);
    }

    update() {
        return db.execute('UPDATE sales SET CustomerID = ?, ItemID = ?, Quantity = ?, SalesDate = ? WHERE SalesID = ?', [this.CustomerID, this.ItemID, this.Quantity, this.SalesDate, this.SalesID]);
    }

    static deleteById(id) {
        return db.execute('DELETE FROM sales WHERE SalesID = ?', [id]);
    }

    static fetchSalesByCustomer() {
        return db.execute('SELECT CustomerID, SUM(SaleAmount) AS TotalSales FROM sales GROUP BY CustomerID');
    }

}
module.exports = Sales;