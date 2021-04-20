
import { createRequire } from 'module';
import * as shell from "shelljs";
import * as routes from "./routes";
const Keycloak = require ('keycloak-connect')
const session = require('express-session');
shell.cp( "-R", "src/views", "dist/" );
// const require = createRequire(import.meta.url);
import path from 'path'
// import { fileURLToPath, pathToFileURL } from 'node:url';
// const __dirname = path.dirname(__filename);
// import * as mariadb from '../node_modules/mariadb/package.json';

import { request } from 'http';

// import mariadb from'mariadb';
import mariadb from 'mariadb';
// import express from 'express';
// import express from '../node_modules/@types/express/';
import express from 'express';
const app= express();



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


app.listen(4500,()=>{console.log('Express server running at http://127.0.0.1:3000')});
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );
app.use( express.json() );

app.get('/',keycloak.protect(), function(request, response) {
   response.render( "index" );
  })
  // Routes registerd
routes.register(app);
  app.use( express.static( path.join( __dirname, "public" ) ) );


