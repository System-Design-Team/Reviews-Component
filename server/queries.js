const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'worstBuyReviews'
})

connection.connect();

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

// gets reviews from DB where sku matches one sent in get req

const getReviewsForProduct = (sku, callback) => {
  connection.query('SELECT * FROM reviews WHERE product_sku = (?)', [sku], (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, err)
    }
  })
};

module.exports = {
  getAllreviews,
  getReviewsForProduct
}