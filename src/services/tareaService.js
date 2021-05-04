const mongoose = require('mongoose');
const Tarea = require('../models/tareaModel');


exports.list_all_tarea = (req, res) => {
    Tarea.find({}).exec(function (err, tarea) {
        if (err) {
            return res.send(err);
        }
        res.json(tarea);
    });
};

exports.store_tarea = (req, res) => {
    const new_tarea = new Tarea(req.body);
    new_tarea.save(function (err, tarea) {
        if (err) {
            res.send(err);
        }
        res.json(tarea);
    });
};

exports.read_tarea = (req, res) => {
    let id = req.params.id;
    Tarea.findById(id, function (err, tarea) {
        if (err)
            res.send(err);
        res.json(tarea);
    })
};

exports.update_tarea = (req, res) => {
    Tarea.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, tarea) {
        if (err)
            res.send(err);
        res.json(tarea);
    })
};

exports.delete_tarea = (req, res) => {
    Tarea.remove({ _id: req.params.id }, function (err, tarea) {
        if (err)
            res.send(err);
        res.json({message : "La tarea se elimino correctamente"})
    });
};