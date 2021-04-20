
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

const memoryStore = new session.MemoryStore();

// session
app.use(session({
secret:'thisShouldBeLongAndSecret',
resave: false,
saveUninitialized: true,
store: memoryStore
}));

const keycloak = new Keycloak({ store: memoryStore });
 app.use(keycloak.middleware({logout: '/logoff'}));


// app.use(keycloak.middleware())

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.get('/test', keycloak.protect(), function(req, res){
  res.cookie('token','ahoj')
  res.render('test', {title:'Test of the test'});
});
app.get('/',keycloak.protect(),(request, response) => {
  response.render("index");
})
app.listen(3000, () => { console.log('Express server running at http://127.0.0.1:3000') });
// Routes registerd
routes.register(app);
app.use(express.static(path.join(__dirname, "public")));


