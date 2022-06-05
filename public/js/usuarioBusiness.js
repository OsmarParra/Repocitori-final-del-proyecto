const { append } = require("vary");

$(document).ready(function () {
  $("#formRegistry").submit(function (event) {
    console.log("entro");
    event.preventDefault();
  });
});

function limpiarForm() {
  $("#nombreU").val();
  $("#correo").val();
  $("#contrasenna").val();
  $("#Contrasenna_2").val();
}

function autenticarUsuario(){
  var correoL = $("#correoL").val();
  var contrasennaL = $("#contrasennaL").val();

  var object = {

    correoL: correoL,
    contrasennaL: contrasennaL,

  }

  console.log(object);

  fetch("http://localhost:3000/autenticarUsuario", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(object),
    cache: "no-cache",
  })
    .then(function (response) {
      console.log("entro");
      return response.text();
    })

    .then(function (data) {
      if (data == "1") {
        alert("Usuario autenticado");
        limpiarForm();
        location.href='Home.html';
      } else {
        alert("Error al autentitar");
      }
    })

    .catch(function (err) {
      console.log(err);
    });

}

function crearUsuario() {
  var correo = $("#correo").val();
  var nombreU = $("#nombreU").val();
  var Contrasenna = $("#Contrasenna_2").val();

  var object = {
    correo: correo,
    nombreU: nombreU,
    contrasenna: Contrasenna,
  };

  console.log(object);

  fetch("http://localhost:3000/createUsuario", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(object),
    cache: "no-cache",
  })
    .then(function (response) {
      console.log("entro");
      return response.text();
    })

    .then(function (data) {
      if (data == "1") {
        alert("Usuario Creado");
        limpiarForm();
      } else {
        alert("error al insertar");
      }
    })

    .catch(function (err) {
      console.log(err);
    });
}

function deleteUsuario(correo) {
  var correo = $("#correo").val();
  var object = { correo: correo };

  fetch("http://localhost:3000/deleteUsuario", {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(object),
    cache: "no-cache",
  })
    .then(function (response) {
      console.log("entro");
      limpiarFormulario();
      return response.text();
    })

    .catch(function (err) {
      console.log(err);
    });
}
