var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DesaSchema = new Schema({
    nama: {
        type: String,
        required: true
    }
});
//Export Model
module.exports = mongoose.model('Desa', DesaSchema);