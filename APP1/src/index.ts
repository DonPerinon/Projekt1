import express from 'express';
import mariadb from 'mariadb';
import path from "path";
const app= express();
app.listen(3000,()=>console.log('Express server running at http://127.0.0.1:3000'));
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname,'..','index.html'))
  })
app.use(express.static(__dirname));

