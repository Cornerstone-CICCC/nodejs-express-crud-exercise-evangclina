"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
// Home 
pageRouter.get("/", (req, res) => {
    res.status(200).send("Welcome to my homepage");
});
//About
pageRouter.get('/about', (req, res) => {
    res.status(200).send('About Us');
});
//404 not found 
pageRouter.get("*", (req, res) => {
    res.status(404).send(`<h1>Page not found :(</h1>
        <img src="https://media.tenor.com/OgIQVzGLDiQAAAAM/annoyed.gif" alt="sad gif">`);
});
exports.default = pageRouter;
