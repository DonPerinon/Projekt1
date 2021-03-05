
import { createRequire } from 'module';
import * as shell from "shelljs";
import * as routes from "./routes";
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


export const db = mariadb.createPool({
   host:'localhost',
   port:3385,
   password:'mypass',
   user:'root',
   database:'app_db',
   connectionLimit: 5
 });

export async function asyncFunction() {
   let conn;
   try {
     conn = await db.getConnection();
     const rows = await conn.query("SELECT Name from Animal;");
     console.log(rows); // [ {val: 1}, meta: ...
   } catch (err) {
     throw err;
   } finally {
     if (conn) return conn.end();
   } };

app.listen(3000,()=>{console.log('Express server running at http://127.0.0.1:3000')});
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );
app.use( express.json() );
app.get('/', function(request, response) {
   response.render( "index" );
  })
  // Routes registerd
routes.register(app);
  app.use( express.static( path.join( __dirname, "public" ) ) );


