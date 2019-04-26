var mongoose = require("mongoose");
var Warga = require("../models/Warga");

var wargaController = {};

//controller penyimpanan
wargaController.save = function (req, res) {
    var warga = new Warga(req.body);

    warga.save(function (err) {
        if (err) {
            console.log(err);
            res.render('index');
        } else {
            console.log("Sucessfully created an warga.");
            res.redirect('../');

        }

    });
};

module.exports = wargaController;