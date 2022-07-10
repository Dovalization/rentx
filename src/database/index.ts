import "reflect-metadata";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
});

function createConnection(host = process.env.DB_HOST): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

createConnection();
