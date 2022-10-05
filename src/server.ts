import "dotenv/config";
import express from "express";
import "reflect-metadata";
import swaggerUI from "swagger-ui-express";
import { createConnection } from "./database";
import { router } from "./routes";
import "./shared/container";
import swaggerConfig from "./swagger.json";
createConnection();

const app = express();

console.log(process.env.DB_HOST);

const port = process.env.EXPRESS_PORT || 3333;

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
