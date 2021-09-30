const buttonIngresar = () => {
    let tbody = document.getElementById("toinformation");
    let idproduct = document.getElementById("ProductDescription").value; //Id del producto
    document.getElementById("ProductDescription").value="";
    let subtotal = document.getElementById("subtotal").value;
    document.getElementById("subtotal").value="";
    let type;
    let IVA;
    let total;
    let totalventas = JSON.parse(localStorage.getItem("totalventas"));
    let totalcompras =JSON.parse(localStorage.getItem("totalcompras"));;

    //Verifico si es compra o venta
    if (document.getElementById('venta').checked) {
        type = document.getElementById('venta').value;
    } else {
        type = document.getElementById('compra').value;
    }

    //Busco nombre del producto
    let productsids=[394,395,396,397];
let productsnames=["Tornillo 2cm","Tornillo 3cm","Tornillo 4cm","Tornillo 5cm"];
    for (var i = 0; i < length(productsids); i++){
    if (idproduct==productsids[i]){
        nameproduct==productsnames[i];
    }
    }

//Cálculo del total según IVA
    if (document.getElementById('basico').checked) {
        IVA = 22 / 100 * subtotal;
        total = parseInt(subtotal) + IVA;
    } else if (document.getElementById('minimo').checked) {
        IVA = 10 / 100 * subtotal;
        total = parseInt(subtotal) + IVA ;
    } else {
        IVA=0;
        total = parseInt(subtotal);
    }
  // Ingresar un producto
    if (idproduct && subtotal) {
        tbody.innerHTML += `<tr><td>${nameproduct}</td><td>${idproduct}</td><td>${type}</td><td>${subtotal}</td><td>${IVA}</td><td>${total}</td></tr>`;
    } else {     
        alert("No deben quedar campos vacíos");
    }
};





document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem("totalcompras", JSON.stringify(0));
    localStorage.setItem("totalventas", JSON.stringify(0));
    document.getElementById("btnIngresar").addEventListener("click", buttonIngresar);
});