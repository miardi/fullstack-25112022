import Sequelize from "sequelize";

const db = new Sequelize("fullstackdb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
