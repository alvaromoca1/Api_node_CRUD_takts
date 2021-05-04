const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
    name: {
        type: String
    },
    descripcion: {
        type: String
    },
    status: {
        type: String,
        default: "activo"
    }
});

module.exports = mongoose.model('tareas', tareaSchema);
