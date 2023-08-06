const express = require('express');
const app = express();

const path = require('path');
const products = require('./Routes/Product');
const category = require('./Routes/Category');

app.use(express.static(path.resolve(__dirname,'../Public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('./API-REST/Products',Product);
app.use('./API-REST/Category',Category);

app.listen(3000, () => console.log(`server corriendo en el puerto http://localhost:3000/`));
