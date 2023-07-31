
const express = require('express');
const app = express();
const port = 3000;

const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const productRoutes = require('./routes/productRoutes');


app.use(express.json());


app.use(authMiddleware);


app.use('/api', productRoutes);


app.use(errorMiddleware);


app.listen(port, () => {
  console.log(Servidor escuchando en http://localhost:${port});
});