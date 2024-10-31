"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import packages/modules
const express_1 = __importDefault(require("express"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//set up express
const app = (0, express_1.default)();
//routes
app.use("/", page_routes_1.default);
app.use("/products", products_routes_1.default);
//start server
const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
