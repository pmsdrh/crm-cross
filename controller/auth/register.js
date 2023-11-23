const jwt = require("jsonwebtoken");

class Register {
  constructor(db, app) {
      this.db = db;
  }
  generateToken (id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
  }
  
}

module.exports = Register;