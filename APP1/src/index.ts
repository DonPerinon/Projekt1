import express from 'express';
const maradb= require('mariadb');

const app= express();
app.listen(3000,()=>console.log('Ahoj'));
app.get('/', function(request, response) {
    response.send('Hello World!')
  })