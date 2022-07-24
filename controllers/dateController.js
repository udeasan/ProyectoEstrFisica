const { json } = require('express');
const Date = require('../models/dateModel.js');
const asyncHandler = require('express-async-handler');

const getDate = asyncHandler(async (req, res) => {
    const Dates = await Date.find({});
    res.status(200).json(Dates);
})

const postDate = asyncHandler(async (req, res) => {
    if (!req.body.id){
        res.status(400).json({"message" : "Debe contener un id"});
    }
    
    const Dates = await Date.find({fecha : req.body.fecha, hora : req.body.hora})

    if(Dates.length > 0) {
        res.status(400).json({"message" : "Ya existe una cita programada para esa fecha y hora"});
    } else {
        const date = await Date.create({
            id: req.body.id,
            nombreCliente: req.body.nombreCliente,
            fecha: req.body.fecha,
            hora: req.body.hora,
            tipoCita: req.body.tipoCita
        });
    
        res.status(200).json(date);
    }
})

const putDate = asyncHandler(async (req, res) => {
    if (!req.params.id){
        res.status(400).json({"message" : "Debe contener un id"});
    }
    if (!req.body.fecha){
        res.status(400).json({"message" : "Debe contener una fecha"});
    }
    if (!req.body.hora){
        res.status(400).json({"message" : "Debe contener una hora"});
    }

    const date = await Date.find({id: req.params.id})

    if(!date) {
        res.status(400);
        throw new Error('No se encontro la cita');
    }

    const updatedDate = await Date.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedDate);
})

const deleteDate = asyncHandler(async (req, res) => {
    await Date.findByIdAndDelete(req.params.id);

    res.status(200).json({"message" : "Se ha eliminado la cita"});
})

module.exports = {
    getDate,
    postDate,
    putDate,
    deleteDate
};