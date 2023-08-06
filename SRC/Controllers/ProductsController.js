const { json } = require('body-parser');
const { create } = require('domain');
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

const rutaJson = path.resolve(__dirname, '../Data/Products.json');
const dataJson = fs.readFileSync(rutaJson, { encoding: 'utf8' }); 
const products = json.parse(dataJson);

const controller = 
  createNewProduct: (req, res) => console.log("Create -- Post");
      let product = {};
      console.log(Product);
      console.log(req.body); 
      if (!req.body.name || !req.body.price || !req.body.category || !req.body.image || !req.body.colour)
          return res.json({msg: "Faltan campos obligatorios"});

            Product.name = req.body.name;
            Product.price = req.body.price;
            Product.category = req.body.category;
            Product.image = req.body.image;
            Product.colour = req.body.colour;
            if (req.body.description == " ") product.description = req.body.name;
            else product.description = req.body.description;
            console.log(Product);
            Product.push(Product);
            let ProductsJson = json.stringify(Product,null,5); 
            fs.writeFileSync(rutaJson,productsJson,{encoding: 'utf-8'}); 

            res.json("Producto creado exitosamente");

        
          allProducts: (req, res) => res.json(Products.json);
              console.log("ALL");
          
          oneProduct: (req, res) => let id = req.params.id;
              let Products.json = Products.find(Product => Product.id == id);
              res.json(Product);
              console.log("ID");
          


        