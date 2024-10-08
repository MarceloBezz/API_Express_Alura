import express from "express";
import livros from "./livroRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    //Concessão das rotas à aplicação por meio do middleware
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
    app.use(express.json(), livros, autores);

};

export default routes;