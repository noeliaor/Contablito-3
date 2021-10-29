"use strict";
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let AccessButton = document.getElementsByClassName("AccessButton")[0];

document.addEventListener("DOMContentLoaded", function (e) {
 // let usersinfo = [{ username: "admin", password: "@Contablito2021" }]; //Almaceno datos de usuario administrador
   // localStorage.setItem("usersInfo", JSON.stringify(usersinfo));

  AccessButton.addEventListener("click", () => { //Al presionar en el botón de ingreso:
    //Se extraen los datos del formulario;
   let Txtuser = document.getElementById('datauser').value;//Ingreso directo en la página
  let  Txtpassword = document.getElementById('datapassword').value;
    if (Boolean(Txtuser && Txtpassword)&& findUser(Txtuser,Txtpassword)) {  //Controlo que se haya realizado alguna de las autenticaciones
      window.location.href = "index.html"; //si se autenticó redirige al index (página inicial de la tienda)
      localStorage.setItem('user', Txtuser); //Almacena como datos de sesión el usuario y contraseña ingresados en el formulario de la página.
      localStorage.setItem('password', Txtpassword);

    }
    else {
      alert("Usuario y/o contraseña no registrados.") //
    }

  })
});
function findUser(User,Password) { //Función que devuelve true si no hay coincidencias con ID's existentes
    let status = false;
    for (let user of JSON.parse(localStorage.getItem("usersInfo"))) {
        if ((User == user.username)&&(Password==user.password)) {
            status = true;
        }
    }
    return status;
}