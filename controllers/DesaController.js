var mongoose = require("mongoose");
var Desa = require("../models/Desa");

var desaController = {};

//controller menampilkan data dari collection desa yang akan ditampilkan pada form, input warga

desaController.find = function (req, res) {
    var desa = new Desa(req.body);

    desa.find({}, function (err, desa) {
        console.log(desa);
        res.render('warga', {
            desa: desa,
            title: 'Crud Desa'
        });
    }).select('_id');
};

//controller untuk melakukan penyimpanan data inputan ke collection desa

desaController.save = function (req, res) {
    var desa = new Desa(req.body);

    desa.save(function (err) {
        if (err) {
            console.log(err);
            res.render('desa');
        } else {
            console.log("Sukses menyimpan data desa.");
            //kembalikan ke halaman home
            res.redirect('../');
        }
    });
};
module.exports = desaController;