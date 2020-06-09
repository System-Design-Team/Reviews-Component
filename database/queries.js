const mongoose = require('mongoose');
//const { mongoConfig } = require('./config.js');
//const connection = mongoose.connect(mongoConfig);
//const connection = mongoose.connect('mongodb://localhost/SDC', {useNewUrlParser: true});

// connection.connect(() => {
//   console.log('hello world')
// });

mongoose.connect('mongodb://localhost/SDC', {useNewUrlParser: true})
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch(err => {
    console.error('database connection error')
  });


// gets all reviews
const getFirstItemReviews = (callback) => {
  connection.query('SELECT * FROM reviews', (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
};

const getLastItemReviews = (callback) => {
  connection.query('SELECT * FROM products', (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

// gets reviews from DB where sku matches one sent in get req
const getItemReviews = (id, callback) => {
  getFirstItemReviews.find('SELECT * FROM products WHERE product_title = "Claymore Roomba";', (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, err)
    }
  })
};

module.exports = {
  getFirstItemReviews,
  getItemReviews,
  getLastItemReviews
}