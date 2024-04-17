const { UserService } = require("../service/userService.js");

const getUsers = async (request, reply) => {
  try {
    const userService = new UserService();
    const users = await userService.findUsers();
    return reply
      .status(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ users });
  } catch (error) {
    log(error);
    return reply.send({ error: "Nenhum usuario encontrado" });
  }
};


const getUser = async (request, reply) => {
  try {
    const userService = new UserService();
    const user = await userService.findUserById(request.params.id);
    return reply
      .status(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ user });
  } catch (error) {
    log(error);
    return reply.status(404).send({ error: "Nenhum usuario encontrado" });
  }
};

module.exports = { getUser, getUsers }