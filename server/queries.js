const mysql = require('mysql');
const config = require('./serverConfig.js');

const connection = mysql.createConnection(config);

connection.connect(() => {
  console.log('yo')
});

// gets all reviews

const getAllreviews = (callback) => {
  connection.query('SELECT * FROM reviews', (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
};

const getAllProducts = (callback) => {
  connection.query('SELECT * FROM products', (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

// gets reviews from DB where sku matches one sent in get req

const getReviewsForProduct = (name, callback) => {
  connection.query('SELECT * FROM products WHERE product_title = "Claymore Roomba";', (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, err)
    }
  })
};

module.exports = {
  getAllreviews,
  getReviewsForProduct,
  getAllProducts
}