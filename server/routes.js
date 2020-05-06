const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = 9004;
const queries = require('./queries');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));



app.get('/reviews', (req, res) => {
  queries.getAllreviews((err, data) => {
    if (err) {
      res.status(500).send('could not get data from DB');
    } else {
      res.send(data);
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})