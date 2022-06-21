const express = require("express");
const cors = require("cors");

class Server {
   constructor() {
      this.app = express();
      this.port = process.env.PORT;
      this.paths = {
         client: "/api/client",
      };
      this.middlewares();
      this.routes();
      this.listen();
   }

   middlewares() {
      this.app.use(cors());
      this.app.use(express.json());
   }

   routes() {
      this.app.use(this.paths.client, require("../routes/client.routes"));
   }

   listen() {
      this.app.listen(this.port, () => {
         console.log(`Servidor corriendo en el puerto ${this.port}`);
      });
   }
}

module.exports = Server;
