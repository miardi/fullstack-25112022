import Sequelize from "sequelize";
import db from "../config/database.config.js";

const { DataTypes } = Sequelize;

const Product = db.define("products", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
});

export default Product;
