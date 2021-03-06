import * as express from "express";
import * as api from "./api";
export const register = (app: express.Application) => {
    const oidc = app.locals.oidc;

    // define a route handler for the default home page
    app.get("/", (req: any, res) => {
        res.render("index");
    });
    app.get("/animal", (req: any, res) => {
        res.render("animals");
    });
    app.get("/logoff", (req: any, res) => {
        res.render("animals");
    });

    api.register(app);
};
