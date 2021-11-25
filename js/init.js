
document.addEventListener("DOMContentLoaded", () => {
  let user = localStorage.getItem('user');
  document.getElementsByClassName("site-header sticky-top py-1 bg-dark")[0].innerHTML = `<div class="container d-flex flex-column flex-md-row justify-content-between">
    <a class="py-2 d-none d-md-inline-block" style="color:white" href="index.html">Inventario  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
    <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
  </svg></a>
    <a class="py-2 d-none d-md-inline-block" style="color:white" href="productsmanagement.html">Gestión de productos</a>
    <a class="py-2 d-none d-md-inline-block" style="color:white" href="transactions.html">Historial de transacciones</a>
     <a class="py-2 d-none d-md-inline-block" style="color:white" href="users.html">Gestión de usuarios</a>
    <div class="dropdown">
      <a style="text-align:center;height:35px; padding-top:6px;padding-bottom:6px;" class="btn, btn-secondary, dropdown-toggle, d-none, d-md-inline-block, AccessButton" id="User" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span style="color:white">${user}</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
    </svg>
      </a>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item" id="ToLogin" href="login.html">Cerrar sesión</a>
      </div>
  </div>`
});