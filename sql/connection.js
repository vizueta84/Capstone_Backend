const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        // Need to fill this in with Data base credentials
        connectionLimit: 100,
        host: "localhost",
        user: "root",
        password: "password",
        database: "admin",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
