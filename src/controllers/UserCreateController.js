const { UserService } = require("../service/userService.js");

const createUser = async (request, reply) => {
  try {
    const Service = new UserService();
    const user = await Service.createUser(request.body);
    return reply
      .status(201)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(user, { message: "Usuario criado com sucesso! " });
  } catch (error) {
    return reply.send(error);
  }
};

module.exports = { createUser };
