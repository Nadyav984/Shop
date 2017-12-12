var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'nvasylyshyn',
  password: '9651',
  database: 'shop'
});
app.use('/assets', express.static('assets'))

// viewed at http://localhost:8080
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.route(['/products', '/products/:id'])
  .get((req, res) => {
    if (req.params.id) {
      // let product = function();
      return res.json({
        err: 'not implemented'
      })
    }


    connection.query(`SELECT p.name, p.price, i.path as image, s.discount FROM shop.products p
LEFT JOIN shop.img i ON p.img_id = i.id
LEFT JOIN shop.sale s ON p.id = s.product_id`, function (error, results, fields) {
      if (error) {
        return res.status(500).json(error)
      }
      return res.json(results)
    });



  })
app.listen(8080);
