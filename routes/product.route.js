import express from "express";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updatePorduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", createProduct);
productRouter.patch("/:id", updatePorduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
