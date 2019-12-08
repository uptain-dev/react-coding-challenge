require("dotenv").config();

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db/api.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5555;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
