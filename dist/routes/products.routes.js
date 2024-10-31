"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const productRouter = (0, express_1.Router)();
// In-memory Database
let products = [];
// Get all products 
productRouter.get('/', (req, res) => {
    res.status(200).json(products);
});
//post new product 
productRouter.post("/", (req, res) => {
    const newProduct = {
        id: (0, uuid_1.v4)(),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    };
    products = [...products, newProduct];
    res.status(200).send(`Added new product to list`);
});
//get product by ID 
productRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const foundProduct = products.find(product => product.id === id);
    if (foundProduct) {
        res.status(200).json(foundProduct);
    }
    else {
        res.status(404).send(`Product not found`);
    }
});
//PUT request to update product 
productRouter.put("/:id", (req, res) => {
    var _a, _b, _c;
    const { id } = req.params;
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        const updateProduct = Object.assign(Object.assign({}, products[productIndex]), { name: (_a = req.body.name) !== null && _a !== void 0 ? _a : products[productIndex].name, description: (_b = req.body.description) !== null && _b !== void 0 ? _b : products[productIndex].description, price: (_c = req.body.price) !== null && _c !== void 0 ? _c : products[productIndex].price });
        products[productIndex] = updateProduct;
        res.status(201).json(updateProduct);
    }
    else {
        res.status(404).send(`Product not found :(`);
    }
});
//delete product by id
productRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    const foundProduct = products.find(product => product.id === id);
    if (foundProduct) {
        products = products.filter(product => product.id !== id);
        res.status(200).send(`Todo was deleted successfully...`);
    }
    else {
        res.status(404).send(`Product not found`);
    }
});
exports.default = productRouter;
