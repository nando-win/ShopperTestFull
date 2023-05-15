const db = require(`../db`);

module.exports = {
  listar: () => {
    return new Promise((agree, disagree) => {
      db.query("SELECT * from products", (error, results) => {
        if (error) {
          disagree(error);
          return;
        }
        agree(results);
      });
    });
  },

  product: (code) => {
    return new Promise((agree, disagree) => {
      db.query(
        "SELECT * from products WHERE code = ?",
        [code],
        (error, results) => {
          if (error) {
            disagree(error);
            return;
          }
          if (results.length > 0) {
            agree(results[0]);
          } else {
            agree(false);
          }
        }
      );
    });
  },

  insert: (code, name, cost_price, sales_price) => {
    return new Promise((accept, reject) => {
      db.query(
        "INSERT INTO products (code, name, cost_price, sales_price) VALUES (?, ?, ?, ?)",
        [code, name, cost_price, sales_price],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          } else {
            accept(results.insertCode);
          }
        }
      );
    });
  },

  alter: (code, name, cost_price, sales_price) => {
    return new Promise((accept, reject) => {
      db.query(
        "UPDATE products SET name = ?, cost_price =?, sales_price = ? WHERE code = ?",
        [name, cost_price, sales_price, code],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          } else {
            accept(results.insertCode);
          }
        }
      );
    });
  },

  alterPrice: (code, sales_price) => {
    return new Promise((accept, reject) => {
      db.query(
        "UPDATE products SET sales_price = ? WHERE code = ?",
        [sales_price, code],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          } else {
            accept(results.insertCode);
          }
        }
      );
    });
  },
};
