const db = require("../util/database.js");
const Product = require("../model/product.js");

exports.getApiInfo = (req, res, next) => {
  endPoints = [
    { method: "GET", url: "/", info: "Detalhes da Api." },
    {
      method: "POST",
      url: "/products",
      info:
        "O endpoint irá processar o [products.json](products.json) que será enviado pelo Projeto Web.",
    },
    {
      method: "PUT",
      url: "/products/:productId",
      info:
        "Será responsável por receber atualizações realizadas no Projeto Web.",
    },
    {
      method: "DELETE",
      url: "/products/:productId",
      info: "Remover o produto da base.",
    },
    {
      method: "GET",
      url: "/products/:productId",
      info: "Obter a informação somente de um produto da base de dados.",
    },
    {
      method: "GET",
      url: "/products",
      info: "Listar todos os produtos da base de dados",
    },
  ];

  res.status(200).json({
    success: true,
    message: "Informações sobre a API.",
    endPoints: endPoints,
  });
};

exports.getProducts = (req, res, next) => {
  db.execute("SELECT * FROM products")
    .then(([rows, fieldData]) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProductById = (req, res, next) => {
  const id = req.params.id;
  const sql = "SELECT * FROM products where id = " + id;

  db.execute(sql)
    .then(([rows, fieldData]) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteProduct = (req, res, next) => {
  var id = req.params.id;
  let sql = `DELETE FROM products WHERE id = ?`;

  db.query(sql, id, (error, results, fields) => {
    if (error) {
      res
        .status(200)
        .json({ sucesso: false, mensagem: "Erro ao excluir o produto." });
    } else {
      res
        .status(200)
        .json({ sucesso: true, mensagem: "Produto foi excluído." });
    }
  });
};

exports.updateProduct = (req, res, next) => {
  const id = req.body.id;
  const title = req.body.title;
  const type = req.body.type;
  const rating = req.body.rating;
  const price = req.body.price;

  let sql = `UPDATE products
             SET title = ?, type = ?, rating = ?, price = ?
             WHERE id = ?`;

  let data = [title, type, rating, price, id];

  db.query(sql, data, (error, results, fields) => {
    if (error) {
      res
        .status(200)
        .json({ sucesso: false, mensagem: "Erro ao alterar o produto." });
    } else {
      res
        .status(200)
        .json({ sucesso: true, mensagem: "Produto foi alterado." });
    }
  });
};
