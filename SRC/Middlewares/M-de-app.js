const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use((req, res, next) => 
  
  const ruta = req.path;

  const fecha = new Date().toISOString();

  const logMessage = [${Date}] - Ruta: ${Route} - method: ${req.method} - IP: ${req.ip}\n;

  const logFilePath = path.join(__dirname, 'logs', 'access.log');

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo:', err);
    }
    next();
  });
);


app.get('./Routes/Category.js'), (req, res) => {
  res.send('Categorias.');
};

app.get('./Routes/Product.js'), (req, res) => {
  res.send('Productos.');
};

app.use(req, res, next) => 
    console.log('Ruta del request:', req.path);
    next();
    
const port = 3000;
app.listen(3000, () => console.log(`server corriendo en el puerto http://localhost:3000/`));