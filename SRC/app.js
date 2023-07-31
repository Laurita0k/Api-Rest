const express = require('express');
const app = express('express');
const routes = require('./Routes');
const src = require('./SRC')

const products = require('/routes/ProductRoutes')
app.use('/api/ProductRoutes' ,products);

app.listen(3000, () => console.log(`server corriendo en el puerto http://localhost:3000/`));
