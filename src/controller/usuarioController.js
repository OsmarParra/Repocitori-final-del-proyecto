'use strict';

const usuario = require('../models/usuario');

exports.readAll = function(req,res){

    cliente.readAll((err, data)=>{

        if (err) {

            res.status(500).send({

                message:
                    err.message || "Ocurrio un error al Consultar Los Datos."

            });

        } else {

            res.send(data);   

        }

    });

}

exports.auth = function(req,res){

    const usuarioData = new usuario(req.body);
    var result = usuario.auth(usuarioData);
    res.send(result);

}

exports.create = function(req,res){
  
    const usuarioData = new usuario(req.body);
    var result = usuario.create(usuarioData);
    res.send(result);

}

exports.delete = function(req,res){

    const usuarioData = new usuario(req.body);
    var result = usuario.delete(usuarioData);
    res.send(result);

}
