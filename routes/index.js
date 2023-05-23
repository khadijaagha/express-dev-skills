var express = require('express');
var router = express.Router();
const {index} = require('../controller/index');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'Home Page'});
})

module.exports = router;
