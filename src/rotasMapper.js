const userController = require("./controllers/UserCreateController");
const userGetController = require("./controllers/UserGetController");
const userUpdateController = require("./controllers/UserUpdateController");
const userDeleteController = require("./controllers/UserDeleteController");

const  rotasMapper = (rotas) => {
    rotas.get("/user", userGetController.getUsers);
    rotas.get("/user/:id", userGetController.getUser);
    rotas.post("/user", userController.createUser);
    rotas.put("/user/:id", userUpdateController.updateUser);
    rotas.delete("/user/:id", userDeleteController.deleteUser);
}

module.exports= { rotasMapper }