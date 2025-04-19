const express = require('express');
const path = require('path');
const data = require('./data/dataset');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.get('/', (req, res) => {
  res.render('progress', { data });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
