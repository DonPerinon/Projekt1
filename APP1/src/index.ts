
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import mariadb from 'mariadb';
import express from 'express';
const app= express();
 const db = mariadb.createPool({
   host:'localhost',
   port:3385,
   password:'mypass',
   user:'root',
   database:'app_db',
   connectionLimit: 5
 });
 console.log(__dirname);
export async function asyncFunction() {
   let conn;
   try {
     conn = await db.getConnection();
     const rows = await conn.query("SELECT Name from Animal;");
     console.log(rows); //[ {val: 1}, meta: ... 
   } catch (err) {
     throw err;
   } finally {
     if (conn) return conn.end();
   } };
   asyncFunction()
app.listen(3000,()=>console.log('Express server running at http://127.0.0.1:3000'));
app.get('/', function(request, response) {
    response.sendFile(path.join(process.cwd(),'index.html'))
  })
  app.use('/src',express.static(path.join(process.cwd(),"src")));
  app.use('/dist',express.static(path.join(process.cwd(),"dist")));
app.use('/css',express.static(path.join(process.cwd(),"css")));
app.use('/img',express.static(path.join(process.cwd(),"IMG")));


