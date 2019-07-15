const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const print = require('./printController');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello');
});
app.post('/api', print.print);

app.listen(8080, () => console.log('Listening on port: 8080'));
