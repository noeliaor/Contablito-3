function cargaInicial() {
    let getlocal = localStorage.getItem("productslistSave"); // si no tengo datos cargo lista
    if (getlocal == null || getlocal == "" || getlocal == false || getlocal == undefined) {

            let categorieslist=[{idpadre:39 ,name: "Tornillo"},{idpadre:40,name: "Ladrillo"}];
  
        let productslist = [ //Genero listado de productos inicial
            { id: 394, name: "Tornillo 2cm", price: 20, stock: 400, minstock: 200 },
            { id: 395, name: "Tornillo 3cm", price: 30, stock: 560, minstock: 200 },
            { id: 396, name: "Tornillo 4cm", price: 40, stock: 280, minstock: 200 },
            { id: 397, name: "Tornillo 5cm", price: 50, stock: 390, minstock: 200 },
            { id: 400, name: "Ladrillo común", price: 200, stock: 500, minstock: 300 },
            { id: 401, name: "Ladrillo hueco", price: 390, stock: 300, minstock: 300 },
            { id: 402, name: "Ladrillo refractario", price: 418, stock: 400, minstock: 300 },
            { id: 403, name: "Ladrillo de vidrio", price: 540, stock: 1000, minstock: 300 },
        ];
        localStorage.setItem("productslistSave", JSON.stringify(productslist)); // Cargo lista por primera vez
        localStorage.setItem("categorieslistSave", JSON.stringify(categorieslist)); //Guardo la nueva vista

    }
}


document.addEventListener("DOMContentLoaded", () => {
    cargaInicial();
    let user=localStorage.getItem('user');
    document.getElementsByClassName("site-header sticky-top py-1 bg-dark")[0].innerHTML=`<div class="container d-flex flex-column flex-md-row justify-content-between">
    <a class="py-2 d-none d-md-inline-block" style="color:white" href="index.html">Inventario</a>
    <a class="py-2 d-none d-md-inline-block" style="color:white" href="form.html">Gestión de productos</a>
    <a class="py-2 d-none d-md-inline-block" style="color:white" href="products.html">Progreso</a>
    <a class="py-2 d-none d-md-inline-block" style="color:white" href="users.html">Gestión de usuarios</a>
    <div class="dropdown">
      <a style="text-align:center;height:35px; padding-top:8px" class="btn, btn-secondary, dropdown-toggle, d-none, d-md-inline-block, AccessButton" id="User" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span style="color:white">${user}</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
    </svg>
      </a>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item" id="ToLogin" href="login.html">Cerrar sesión</a>
      </div>
  </div>`
});