const JsonServer = require("json-server");
const server = JsonServer.create();
const router = JsonServer.router("db.json");
const middlewares = JsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(port);