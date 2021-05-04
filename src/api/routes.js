const express = require('express');
const router = express.Router();

const tareaService = require('../services/tareaService');

module.exports = function (app) {
    app.route('/tarea')
        .get(tareaService.list_all_tarea)
        .post(tareaService.store_tarea);
    
    app.route('/tarea/inf/:id')
        .get(tareaService.read_tarea);
    
    app.route('/tarea/update/:id')
        .put(tareaService.update_tarea);
    
    app.route('/tarea/delete/:id')
        .delete(tareaService.delete_tarea);
};
