const http = require("http");
const server = http.createServer();
require("dotenv").config();
const PORT = process.env.PORT;


server.listen(PORT, () => {
  console.log(`server is runing ${PORT}`);
});
