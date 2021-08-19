const home = require("./home");
const routes = function (server) {
  server.use("/", home);
};

module.exports = routes;
