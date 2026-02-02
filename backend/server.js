const http = require("http");
// import it is in this file app
const app= require('./app')
const server = http.createServer(app);

require("dotenv").config();
const PORT = process.env.PORT;


server.listen(PORT, () => {
  console.log(`server is runing ${PORT}`);
});
