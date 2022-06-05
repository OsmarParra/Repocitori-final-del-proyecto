'use strict';

const dbConn = require('../../config/dbConnection');
var dbConnection = require('../../config/dbConnection');

const CONSULTA = "SELECT u.correo, u.contrasenna, u.nombreU, FROM usuario u";
const INSERT = "INSERT INTO usuario (correo, contrasenna, nombreU) values(?,?,?)";
const DELETE = "DELETE FROM usuario WHERE correo = ?";
const AUTH = "SELECT FROM usuario WHERE correo = ?";

exports.readAll = function(result) {

    dbConn.query(CONSULTA,function(err, res) {

        if (err){

            console.log("error: ", err);
            result(null, err);

        }else{
            
            console.log('producto: ', res);
            result(null,res);

        }

    });

}

exports.auth = (autenticarUsuario) => {

    console.log("Autenticando usuario." + autenticarUsuario);
    var result = "1";
    dbConn.query(AUTH,[autenticarUsuario.correo], function(err, res){

        if (err) {

            console.log(err);
            result="0";

        }
    
    });

    return result;

}

exports.create = (crearUsuario) => {

    console.log("Creando usuario." + crearUsuario);
    var result = "1";
    dbConn.query(INSERT,[crearUsuario.correo, crearUsuario.contrasenna, crearUsuario.nombreU],function(err,res){

        if (err) {

            console.log(err);
            result="0";

        }
    
    });

    return result;

}

exports.delete = (deleteUsuario) => {

    console.log("Borrando usuario." + deleteUsuario);
    var result = "1";
    dbConn.query(DELETE,[deleteUsuario.correo],function(err,res){

        if (err) {

            console.log(err);
            result="0";

        }

    });     

    return result;

}




