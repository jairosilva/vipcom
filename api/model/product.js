const db = require('../util/database');

module.exports = class Product {
  constructor(id, title, type, rating, price) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.rating = rating;
    this.price = price;
  }
};
