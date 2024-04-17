const { UserService } = require("../service/userService.js");

const updateUser = async (request, reply) => {
  try {
    const userService = new UserService();
    const user = await userService.updateUser(request.params.id, request.body);
    return reply
      .status(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ user });
  } catch (error) {
    console.log(error);
    return reply.status(404).send({ error: "Nenhum usuario encontrado" });
  }
};

module.exports= { updateUser }