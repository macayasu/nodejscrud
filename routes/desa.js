var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var desa = require("../controllers/DesaController.js");

//ambil tampilan render dari folder view berformat ejs
router.get('/', function (req, res, next) {
    res.render('desa', {
        title: 'Desa'
    });
});

//fungsi POST menambah data desa
router.post('/tambah', function (req, res) {
    desa.save(req, res);
});

module.exports = router;