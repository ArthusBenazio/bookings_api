require("dotenv").config();
const User = require("./User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthService {
  constructor(repository) {
    this.repository = repository
  }

  async register({ name, email, password }) {
    const userExists = await this.repository.findByEmail(email);
    if (userExists) {
      throw new Error("User already exists");
    }
    const newUser = new User({ name, email, password });
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    await this.repository.save(newUser);
    return newUser;
  }

  async login({ email, password }) {  
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return {
      token,
      user,
    };
  }

  async verifyToken(token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await this.repository.findByEmail(decodedToken.email);
    return user;
}
  
}

module.exports = AuthService
