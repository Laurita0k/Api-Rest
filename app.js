const express = require('express');
const app = express();

const products = require(' ./routes/products');

app.use('/api/products',products );

app.listen(3000, () => console.log(`server corriendo en el puerto http://localhost:3000/`))