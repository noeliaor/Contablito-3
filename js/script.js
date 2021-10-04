//Lista inicial para pruebas 
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

function alertData(theindex) {
    let list = JSON.parse(localStorage.getItem("productslistSave")); //Extraigo lista de productos cargada
    if (list[theindex].stock < list[theindex].minstock) {
        classname = "color-red";
    } else if (list[theindex].stock < list[theindex].minstock + 50) {
        classname = "color-yellow";
    } else {
        classname = "color-green";
    }
    return classname
}
const showData = () => {
    let tbody = document.getElementById("toinformation");

    let list = JSON.parse(localStorage.getItem("productslistSave")); //Extraigo lista de productos cargada

    for (var i = 0; i < list.length; i++) {
        alertData(i);
        tbody.innerHTML += `<tr><td>${list[i].name}</td><td>${list[i].id}</td><td>${JSON.stringify((list[i].id)).substring(2, 0)}</td><td>$${list[i].price}</td><td class="${classname}">${list[i].stock}</td></tr>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ProductDescription").value = "";
    document.getElementById("subtotal").value = "";
    showData();


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
                let index = i;

                if (document.getElementById('venta').checked) {

                    if (list[i].stock - parseInt(subtotal) >= 0) {
                        type = document.getElementById('venta').value;
                        list[i].stock = list[i].stock - parseInt(subtotal); //Si es una resto cantidad de vendidos
                    } else {
                        alert("Stock insuficiente")
                    }
                } else {
                    type = document.getElementById('compra').value;
                    list[i].stock = list[i].stock + parseInt(subtotal); //Sino sumo
                }
                tbody.innerHTML = "";

                localStorage.setItem("productslistSave", JSON.stringify(list)); //Guardo la nueva vista

                //Gestión de alertas;
                alertData(index);
                showData();

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

