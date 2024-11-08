const {
  bookingController,
  authController,
  authService,
} = require("../bootstrap");

const autheticatedRoutes = {
  preHandler: async (request, reply) => {
    const token = request.headers.authorization?.replace(/^Bearer /, "");
    if (!token) {
      reply.code(401).send({ message: "Unauthorized" });
    }
    const user = await authService.verifyToken(token);
    if (!user) {
      reply.code(404).send({ message: "Unauthorized: invalid token" });
    }
    request.user = user;
  },
};

function setupRoutes(app) {
  app.get("/", (request, reply) => {
    reply.send({ message: "Hello world" });
  });

  app.get("/api/bookings", autheticatedRoutes, async (request, reply) => {
    const { code, body } = await bookingController.index(request);
    reply.code(code).send(body);
  });

  app.post("/api/bookings", autheticatedRoutes, async (request, reply) => {
    const { code, body } = await bookingController.save(request);
    reply.code(code).send(body);
  });

  app.post("/api/auth/register", async (request, reply) => {
    console.log("Register", request.body);
    const { code, body } = await authController.register(request);
    reply.code(code).send(body);
  });

  app.post("/api/auth/login", async (request, reply) => {
    const { code, body } = await authController.login(request);
    reply.code(code).send(body);
  });
}

module.exports = { setupRoutes };
