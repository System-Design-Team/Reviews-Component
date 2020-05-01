const express = require('express');
const app = express();
const path = require('path');
const PORT = 9004;
const queries = require('./queries');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './src/build')));

app.get('/api/reviews', (req, res) => {
  res.send('your get is working!')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})