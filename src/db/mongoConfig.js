const { log } = require("console");
const mongoose = require("mongoose");
require("dotenv").config()

const connect = async () => {
  await mongoose
    .connect(process.env.POST_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log("Conexao com o banco de dados funcionou!");
    })
    .catch((error) => {
      log(error);
    });
};

module.exports = { connect };
