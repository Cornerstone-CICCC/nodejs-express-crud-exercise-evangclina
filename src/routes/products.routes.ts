import { Router, Request, Response, response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { Product, ProductRequestBody } from "../types/products";

const productRouter = Router();

// In-memory Database
let products: Product[] = []

// Get all products 
productRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json(products)
  })

//post new product 
productRouter.post("/", (req: Request, res: Response) => {
    const newProduct: Product = {
        id: uuidv4(),
        name: req.body.name, 
        description: req.body.description, 
        price: req.body.price
    }

    products = [...products, newProduct]
    res.status(200).send(`Added new product to list`)
})

//get product by ID 
productRouter.get("/:id", (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params
    const foundProduct = products.find(product => product.id === id)
    if(foundProduct){
        res.status(200).json(foundProduct)
    }else{
        res.status(404).send(`Product not found`)
    }
})

//PUT request to update product 
productRouter.put("/:id", (req: Request< { id: string }, {}, ProductRequestBody>, res: Response) => {
    const { id } = req.params
    const productIndex = products.findIndex(product => product.id === id)
    if(productIndex !== -1){
        const updateProduct = {
            ...products[productIndex], 
            name: req.body.name ?? products[productIndex].name, 
            description: req.body.description ?? products[productIndex].description, 
            price: req.body.price ?? products[productIndex].price
        }
        products[productIndex] = updateProduct
        res.status(201).json(updateProduct)
    }else {
        res.status(404).send(`Product not found :(`)
    }
})

//delete product by id
productRouter.delete("/:id", (req: Request< { id: string }>, res: Response) => {
    const { id } = req.params
    const foundProduct = products.find(product => product.id === id)
    if(foundProduct){
        products = products.filter(product => product.id !== id)
        res.status(200).send(`Todo was deleted successfully...`)
    }else{
        res.status(404).send(`Product not found`)
    }
})

export default productRouter