const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const CUSTOM_HTML_PATH = path.join(__dirname, 'saved', 'custom.html');

// Ensure saved directory exists
if (!fs.existsSync(path.join(__dirname, 'saved'))) {
  fs.mkdirSync(path.join(__dirname, 'saved'));
}

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Home page: Edit HTML
app.get('/', (req, res) => {
  let customHtml = '';
  if (fs.existsSync(CUSTOM_HTML_PATH)) {
    customHtml = fs.readFileSync(CUSTOM_HTML_PATH, 'utf8');
  }
  res.render('index', { customHtml });
});

// Save custom HTML
app.post('/save', (req, res) => {
  const html = req.body.customHtml || '';
  fs.writeFileSync(CUSTOM_HTML_PATH, html, 'utf8');
  res.redirect('/');
});

// Preview custom HTML
app.get('/preview', (req, res) => {
  let customHtml = '';
  if (fs.existsSync(CUSTOM_HTML_PATH)) {
    customHtml = fs.readFileSync(CUSTOM_HTML_PATH, 'utf8');
  }
  res.send(customHtml || '<h2>No custom HTML saved yet.</h2>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
