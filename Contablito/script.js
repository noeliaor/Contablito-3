const buttonIngresar = () => {
    let tbody = document.getElementById("toinformation");
    let idproduct = document.getElementById("ProductDescription").value; //Id del producto
    document.getElementById("ProductDescription").value = "";
    let subtotal = document.getElementById("subtotal").value;
    document.getElementById("subtotal").value = "";
    let type;
    let IVA;
    let total;
    //Busco nombre del producto
    let productsids = [394, 395, 396, 397,400,401,402,403];
    let productsnames = ["Tornillo 2cm", "Tornillo 3cm", "Tornillo 4cm", "Tornillo 5cm", "Ladrillo común","Ladrillo hueco","Ladrillo refractario","Ladrillo de vidrio"];
    let precios = [20, 30, 40, 50,200,390,418,540];
    let stocks = [400, 560, 280, 390,500,300,400,1000];

    for (var i = 0; i < productsids.length; i++) {
        tbody.innerHTML += `<tr><td>${productsnames[i]}</td><td>${productsids[i]}</td><td>${JSON.stringify(productsids[i]).substring(2, 7)}</td><td>${precios[i]}</td><td>${stocks[i]}</td></tr>`;
    }
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
    if (idproduct && subtotal) {
        for (var i = 0; i < productsids.length; i++) {
            if (parseInt(idproduct) == productsids[i]) {
                if (document.getElementById('venta').checked) {
                    type = document.getElementById('venta').value;
                    stocks[i] -= parseInt(subtotal);
                } else {
                    type = document.getElementById('compra').value;
                    stocks[i] += parseInt(subtotal);
                }
                tbody.innerHTML = "";
                for (var i = 0; i < productsids.length; i++) {
                    tbody.innerHTML += `<tr><td>${productsnames[i]}</td><td>${productsids[i]}</td><td>${JSON.stringify(productsids[i]).substring(2, 7)}</td><td>${precios[i]}</td><td>${stocks[i]}</td></tr>`;
                }
            }
        }
    } else {
        alert("No deben quedar campos vacíos");
    }
};

document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem("totalcompras", JSON.stringify(0));
    localStorage.setItem("totalventas", JSON.stringify(0));
    document.getElementById("btnIngresar").addEventListener("click", buttonIngresar);
});