document.addEventListener("DOMContentLoaded", () => {
    let tbody = document.getElementById("toinformation");
    document.getElementById("ProductDescription").value = "";

    let productslist = [ //Genero listado de productos inicial
        { id: 394, name: "Tornillo 2cm", price: 20, stock: 400, minstock: 200},
        { id: 395, name: "Tornillo 3cm", price: 30, stock: 560, minstock: 200},
        { id: 396, name: "Tornillo 4cm", price: 40, stock: 280, minstock: 200},
        { id: 397, name: "Tornillo 5cm", price: 50, stock: 390, minstock: 200},
        { id: 400, name: "Ladrillo común", price: 200, stock: 500, minstock: 300},
        { id: 401, name: "Ladrillo hueco", price: 390, stock: 300, minstock: 300},
        { id: 402, name: "Ladrillo refractario", price: 418, stock: 400, minstock: 300},
        { id: 403, name: "Ladrillo de vidrio", price: 540, stock: 1000, minstock: 300},

    ];
    document.getElementById("subtotal").value = "";

    localStorage.setItem("productslistSave", JSON.stringify(productslist)); //Almaceno listado en localstorage
    
    for (var i = 0; i < productslist.length; i++) {
        tbody.innerHTML += `<tr><td>${productslist[i].name}</td><td>${productslist[i].id}</td><td>${JSON.stringify((productslist[i].id)).substring(2, 0)}</td><td>$${productslist[i].price}</td><td>${productslist[i].stock}</td></tr>`;
    } //Presento lista inicial
    localStorage.setItem("totalcompras", JSON.stringify(0)); //Almaceno total de compras y ventas para progreso
    localStorage.setItem("totalventas", JSON.stringify(0));
    document.getElementById("btnIngresar").addEventListener("click", buttonIngresar); 
});

const buttonIngresar = () => { //Al cliquear en botón de Guardar
    let tbody = document.getElementById("toinformation");
    let type;
    let idproduct = document.getElementById("ProductDescription").value; //Id del producto
    let subtotal = document.getElementById("subtotal").value;

    let list = JSON.parse(localStorage.getItem("productslistSave")); //Extraigo lista de productos cargada
    if (idproduct && subtotal) { //Si datos completos
        for (var i = 0; i < list.length; i++) { //Recorro lista para buscar mismo ID

            if (parseInt(idproduct) == list[i].id) {
                if (document.getElementById('venta').checked) {
                    type = document.getElementById('venta').value;
                 list[i].stock = list[i].stock - parseInt(subtotal); //Si es una resto cantidad de vendidos
                   
                } else {
                    type = document.getElementById('compra').value;
                   list[i].stock =list[i].stock + parseInt(subtotal); //Sino sumo
                }
                tbody.innerHTML = "";
                for (var i = 0; i < list.length; i++) { //Actualizo muestra de datos
                    tbody.innerHTML += `<tr><td>${list[i].name}</td><td>${list[i].id}</td><td>${JSON.stringify((list[i].id)).substring(2, 0)}</td><td>$${list[i].price}</td><td>${list[i].stock}</td></tr>`;
                }
                    localStorage.setItem("productslistSave", JSON.stringify(list)); //Guardo la nueva vista
            }
        }
    } else {
       alert("No deben quedar campos vacíos");
    }

    //    let IVA;
    //  let total;
    //Busco nombre del producto

    //Cálculo del total según IVA
    /*  if (document.getElementById('basico').checked) {
          IVA = 22 / 100 * subtotal;
          total = parseInt(subtotal) + IVA;
      } else if (document.getElementById('minimo').checked) {
          IVA = 10 / 100 * subtotal;
          total = parseInt(subtotal) + IVA;
      } else {
          IVA = 0;
          total = parseInt(subtotal);
      }*/
    // Ingresar un producto  
};

