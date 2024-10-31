//import packages/modules
import express, {Request, Response, NextFunction} from "express"
import { Product, ProductRequestBody } from "./types/products"
import pageRouter from "./routes/page.routes"
import productRouter from "./routes/products.routes"
import { v4 as uuid } from "uuid"
import dotenv from "dotenv"
dotenv.config()

//set up express
const app = express()

//routes
app.use("/", pageRouter)
app.use("/products", productRouter)

//start server
const PORT:number = Number(process.env.PORT) || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})