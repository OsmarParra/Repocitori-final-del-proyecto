'use strict';

var usuarioDAO = require('../daos/usuarioDao');


var usuario = function(usuario){

    this.correo = usuario.correo;
    this.nombreU = usuario.nombreU;
    this.contrasenna = usuario.contrasenna;
    
}

usuario.readAll = (result) => {

    usuarioDAO.readAll(function(err, res){

        if (err) {

            console.log("error: ",err);
            result(null, err);

        }else{

            console.log("cliente: ",res)
            result(null,res);

        }

    })

}

usuario.auth = async (result) => {

    const correo = req.body.correo;
    const contrasenna = req.body.contrasenna;
  
    let contraHash = await bcryptjs.hash(contrasenna, 8);
  
    if(correo && contrasenna){

        usuarioDAO.auth(async(err, res) =>{

            if(result.length == 0 || !(await bcryptjs.compare(contrasenna, result[0].contrasenna))){

                alert("Correo o contraseña inválidos");

            }else{

                alert("Sesión iniciada");

            }

        })

    }

}

usuario.create = (crearUsuario) => {

    console.log("Creando Usuario.")
    var result = usuarioDAO.create(crearUsuario);
    return result;

}

usuario.delete = (deleteUsuario)=>{

    console.log("Borrando Usuario.");
    var result = usuarioDAO.delete(deleteUsuario);
    return(result);

}

module.exports = usuario;