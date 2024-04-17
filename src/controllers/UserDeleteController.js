const { UserService } = require("../service/userService.js");

const deleteUser = async (request, reply) => {
  try {
    const userService = new UserService();
    const user = await userService.deleteUser(request.params.id);
    return reply
      .status(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ user });
  } catch (error) {
    console.log(error);
    return reply.status(404).send({ error: "Nenhum usuario encontrado" });
  }
};

module.exports = { deleteUser };
