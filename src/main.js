const fastify = require("fastify");
const mongo = require("./db/mongoConfig.js");
const { rotasMapper } = require('./rotasMapper')
const { log } = require("console");

const main = fastify();

const start = async () => {
  try {
    await mongo.connect();
    rotasMapper(main);
    await main.listen({
      port: 3000,
      host: "0.0.0.0",
    });
    log(main.server.address());
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();
