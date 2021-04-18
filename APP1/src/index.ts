
import * as shell from "shelljs";
import * as routes from "./routes";
shell.cp("-R", "src/views", "dist/");
import path from 'path'

const Keycloak = require ('keycloak-connect')
const session = require('express-session');
import { request } from 'http';

// import mariadb from'mariadb';
import mariadb from 'mariadb';

import express from 'express';

require('dotenv').config({path: path.resolve(__dirname, '../.env')})
const app = express();





// app.use(keycloak.middleware())
app.listen(3000, () => { console.log('Express server running at http://127.0.0.1:3000') });
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.get('/',(request, response) => {
  response.render("index");
})
// Routes registerd
routes.register(app);
app.use(express.static(path.join(__dirname, "public")));


