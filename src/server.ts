//import packages/modules
import express, {Request, Response, NextFunction} from "express"
// import { Todo, TodoRequestBody } from "./types/todo"
import { v4 as uuid } from "uuid"
import dotenv from "dotenv"
dotenv.config()

//set up express
const app = express()

//routes


//start server
const PORT:number = Number(process.env.PORT) || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})