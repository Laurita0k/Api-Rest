const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/api', routes);

const port = 3000;
app.listen(port, () => {
  console.log(Servidor corriendo en el puerto ${port});
});