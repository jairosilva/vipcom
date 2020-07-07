const express = require("express");
const multer = require("multer");
const fs = require("fs");
const db = require("../util/database.js");

const productsController = require("../controllers/products");

const router = express.Router();

// File upload settings
const PATH = "./uploads";

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

let upload = multer({
  storage: storage,
});

router.get("/", productsController.getApiInfo);

router.post("/products/upload", upload.single("json"), function (req, res) {
  fs.readFile(req.file.path, (err, data) => {
    if (err) throw err;
    let products = JSON.parse(data);

    products.forEach(function (table) {
      var title = table.title;
      var type = table.type;
      var rating = table.rating;
      var price = table.price;

      db.execute("SELECT id FROM products where title = ?", [title])
        .then(([rows, fieldData]) => {
          if (rows.length == 0) {
            db.execute(
              "INSERT INTO products (title, type, rating, price) VALUES (?, ?, ?, ?)",
              [title, type, rating, price]
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });

    res
      .status(200)
      .json({ sucesso: true, mensagem: "Produtos foram importados." });
  });
});

router.put("/products/:id", productsController.updateProduct);
router.delete("/products/:id", productsController.deleteProduct);
router.get("/products/:id", productsController.getProductById);
router.get("/products", productsController.getProducts);

module.exports = router;
