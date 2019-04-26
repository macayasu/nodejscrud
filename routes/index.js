var express = require('express');
var router = express.Router();
var Warga = require("../models/Warga");

/* GET home page. */
router.get('/', function (req, res, next) {
  Warga.find({}, function (err, warga) {
    console.log(warga);
    res.render('index', {
      warga: warga,
      title: 'CRUD Warga'
    });
  }).select('_id nama umur pekerjaan');
});

module.exports = router;