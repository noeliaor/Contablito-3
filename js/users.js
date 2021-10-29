
document.addEventListener("DOMContentLoaded", () => {
    let user = localStorage.getItem('user');
    let password = localStorage.getItem('password');
    if (user == "admin") {
        document.getElementById("toadmin").innerHTML = `
    <center><h3>Agregar un nuevo usuario</h3></center>
    <br></br>
    <form>
  <div class="row">
    <div  style="padding-left:150px" class="col">
    <label for="newuser">Nuevo usuario:</label>
      <input style="width:500px" type="text" id="newuser" class="form-control">
    </div>
    <div style="padding-right:150px" class="col">
    <label for="password">Nueva contraseña: </label>
      <input style="width:500px" type="text" id="newpassword" class="form-control">
    </div>
    </div>
</form>
<br></br>
<br></br>
<center><button type="submit" id="newusersave" style="float:center;border:0px; background-color: #ba0c00;" class="btn btn-primary">Guardar usuario</button></center>
<br></br>
<br></br>
<center><img class="cover-ingreso" src="img/usersicon.png" style="width:100px"></center>
<br></br>
<center><button type="submit" id="usersview" style="float:center; border:0px;background-color: #ba0c00;" class="btn btn-primary">Ver usuarios</button></center>
<br></br>
<div id="showusers"></div>
` //Contenido del HTML con valores dados por la información almacenada inicialmente

    }else{
        document.getElementById("toadmin").innerHTML =`  <center><h3>Usuario no autorizado para acceder a esta información.</h3></center>
        `
    }

    document.getElementById("newusersave").addEventListener("click", () => {
        let newuser = document.getElementById("newuser").value;
        let newpassword = document.getElementById("newpassword").value;
        if (newuser && newpassword) {
            let ispassword = prompt("Por favor, confirme su contraseña", "");
            if (ispassword == password) {
                alert("Usuario agregado correctamente.");
                let userslist = JSON.parse(localStorage.getItem("usersInfo"));
                userslist.push({ username: newuser, password: newpassword });
                localStorage.setItem("usersInfo", JSON.stringify(userslist));
                showData();
            } else {
                alert("Contraseña errónea, verifique e intente nuevamente.")
            }
        } else {
            alert("Por favor, complete los dos campos.")
        }

    });
    document.getElementById("usersview").addEventListener("click", () => {
        document.getElementById("showusers").innerHTML = `  <table>
<thead>
  <tr>
    <th>Usuario</th>
    <th>Contraseña</th>
  </tr>
</thead>
<tbody id="tousers"></tbody>
</table>`
            ;
        showData();
    });
});

const showData = () => {
    let tbody = document.getElementById("tousers");
    tbody.innerHTML = "";
    let userslist = JSON.parse(localStorage.getItem("usersInfo"));
    for (var i = 0; i < userslist.length; i++) {
        tbody.innerHTML += `<tr><td>${userslist[i].username}</td><td>${userslist[i].password}</td><td onclick="deleteData(${i})" id="trash${i}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg></td></tr>`;
    }
}
function deleteData(index) { //Función que se ejecuta cuando se cliquea en el ícono de basura
    let userslist = JSON.parse(localStorage.getItem("usersInfo"));
      if (userslist[index].username != "admin") {
        if (confirm(`¿Está seguro que desea eliminar a ${userslist[index].username}?`)) {
            userslist.splice(index, 1); //Elimino el elemento en el ícono indicado y redefino lista 
            localStorage.setItem("usersInfo", JSON.stringify(userslist));
            let tbody = document.getElementById("tousers");
            tbody.innerHTML = "";
            showData() //Muestro la nueva lista
        }
    }else {
            alert("ERROR: el usuario administrador no se puede eliminar.")
        }
}

