var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var WargaSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    umur: {
        type: String,
        required: true
    },
    pekerjaan: {
        type: String,
        required: true
    },
    desa_id: {
        type: Schema.Types.ObjectId,
        ref: 'Desa',
        required: true
    }
});

//Export model
module.exports = mongoose.model('Warga', WargaSchema);