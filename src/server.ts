import "dotenv/config";
import express from "express";
import swaggerUI from "swagger-ui-express";
import { router } from "./routes";
import swaggerConfig from "./swagger.json";

const app = express();

const port = process.env.EXPRESS_PORT || 3333;

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
