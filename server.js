var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '192.168.0.42',
  user: 'nvasylyshyn',
  password: '9651',
  database: 'shop'
});
app.use('/assets', express.static('assets'))

// viewed at http://localhost:8080
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/admin', function (req, res) {
  res.sendFile(path.join(__dirname + '/admin.html'));
});
app.route(['/products'])
  .get((req, res) => {
    let latest = req.query.latest;
    let sql_query_we_want_to_execute = `SELECT p.name, p.price, i.path as image, s.discount FROM shop.products p
                LEFT JOIN shop.img i ON p.img_id = i.id
                LEFT JOIN shop.sale s ON p.id = s.product_id`
    if(latest) {
      sql_query_we_want_to_execute += ' WHERE created_at>= (CURDATE() - INTERVAL 2 DAY)'
     
    }
    connection.query(sql_query_we_want_to_execute, function (error, results, fields) {
      if (error) {
        return res.status(500).json(error)
      }
      return res.json(results)
    });
    
  })
app.listen(8080,(params) => {
  console.log('Magic happens on 8080')
});
