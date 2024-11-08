class AuthController {
  constructor(service) {
    this.service = service
  }

  async register(request) {
    const { name, email, password } = request.body;
    if (!name || !email || !password) {
      return { code: 400, body: {message: "All fields are required"} };
    }

    try {
      const user = await this.service.register({ name, email, password });
      return { code: 201, body: {message: "User created successfully", user} };
    } catch (error) {
      return { code: 400, body: {message: error.message} };
    }
  }

  async login(request) {
    const { email, password } = request.body;
    
    if (!email || !password) {
      return { code: 400, body: {message: "All fields are required"} };
    }

    try {
      const { token, user } = await this.service.login({ email, password });
      return { code: 200, body: {message: "User logged in successfully", token, user} };
    } catch (error) {
      return { code: 400, body: {message: error.message} };
    }
  }
}

module.exports = AuthController