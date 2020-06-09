const mongoose = require('mongoose');
const db = require('./config.js');

mongoose.connect(db.mongoConfig, {useNewUrlParser: true})
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch(err => {
    console.error('database connection error')
  });

let reviewSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  reviews: [{
    user: {
      type: String,
      required: true,
      maxLength: 25
    },
    title: {
      type: String,
      maxLength: 100
    },
    stars: {
      type: Number,
    },
    reviewText: {
      type: String,
      maxLength: 1000
    }
  }]
});

const itemReview = mongoose.model('reviewSchema', reviewSchema);

module.exports = { itemReview };