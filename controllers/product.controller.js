import { request, response } from "express";
import Product from "../models/product.model.js";

// get all products
export const getAllProducts = async (request, response) => {
  try {
    const products = await Product.findAll();
    response.json(products);
  } catch (error) {
    response.json({ message: error.message });
  }
};

// get product by ID

export const getProductById = async (request, response) => {
  try {
    const product = await Product.findAll({
      where: {
        id: request.params.id,
      },
    });
    response.json(product[0]);
  } catch (error) {
    response.json({ message: error.message });
  }
};

// create new product
export const createProduct = async (request, response) => {
  try {
    const newProduct = await Product.create(request.body);
    response.json({ message: "Success to create new product", newProduct });
  } catch (error) {
    response.json({ message: error.message });
  }
};

// update product by ID
export const updatePorduct = async (request, response) => {
  try {
    const updatedProduct = await Product.update(request.body, {
      where: {
        id: request.params.id,
      },
    });
    response.json({ message: "Success to update product", updatedProduct });
  } catch (error) {
    response.json({ message: error.message });
  }
};

// delete product by ID
export const deleteProduct = async (request, response) => {
    try {
        const deletedProduct = await Product.destroy({
          where: {
            id: request.params.id,
          },
        });
        response.json({ message: "Success to delete product", deletedProduct });
      } catch (error) {
        response.json({ message: error.message });
      }
}
