const { v4: uuid } = require("uuid")

class User {
  constructor({id, name, email, password}) {
    this.id = id ?? uuid(); 
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

module.exports = User;