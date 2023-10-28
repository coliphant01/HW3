const db = require('../util/database');

class Customer {
    constructor(id, name, email) {
        this.CustomerID = id;
        this.CustomerName = name;
        this.CustomerEmail = email;
    }

    save() {
        return db.execute('INSERT INTO customer (CustomerName, CustomerEmail) VALUES (?, ?)', [this.CustomerName, this.CustomerEmail]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM customer');
    }

    static findById(id) {
        return db.execute('SELECT * FROM customer WHERE CustomerID = ?', [id]);
    }

    update() {
        return db.execute('UPDATE customer SET CustomerName = ?, CustomerEmail = ? WHERE CustomerID = ?', [this.CustomerName, this.CustomerEmail, this.CustomerID]);
    }

    static deleteById(id) {
        return db.execute('DELETE FROM customer WHERE CustomerID = ?', [id]);
    }
}
module.exports = Customer;
