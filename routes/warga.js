var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var warga = require("../controllers/WargaController.js");
var Desa = require("../models/Desa");

//ambil tampilan render dari folder view berformat ejs

router.get('/', function (req, res) {
    Desa.find({}, function (err, desa) {
        console.log(desa);
        res.render('warga', {
            desa: desa,
            title: 'CRUD Desa'
        });
    }).select('_id nama');
});

//fungsi POST menambah data desa
router.post('/tambah', function (req, res) {
    warga.save(req, res);
});

module.exports = router;