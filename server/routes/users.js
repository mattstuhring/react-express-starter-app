var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  console.log('GET users route');
  res.send('respond with a resource');
});

module.exports = router;
