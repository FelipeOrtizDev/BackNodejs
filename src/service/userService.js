const userRepository = require("../repositories/userRepository");

class UserService {
  constructor() {
    this.userRepository = userRepository;
  }

  async findUsers() {
    return this.userRepository.findAll();
  };
  async createUser(userData) {  
    return this.userRepository.createUser(userData);
  };

  async findUserById(id)  {
    return this.userRepository.findUser(id);
  };

  async updateUser(id, userData) {
    return this.userRepository.updateUser(id, userData);
  };
  async deleteUser  (id)  {
    return this.userRepository.deleteUser(id);
  };
}

module.exports = {
  UserService,
};
