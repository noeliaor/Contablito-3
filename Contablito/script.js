document.addEventListener("DOMContentLoaded", () => {
    let tbody = document.getElementById("toinformation");
      document.getElementById("ProductDescription").value = "";

    let productslist= [
        { id: 394, name: "Tornillo 2cm", price:20, stock:400},
        { id: 395, name: "Tornillo 3cm", price:30, stock:560},
        { id: 396, name: "Tornillo 4cm", price:40, stock:280},
        { id: 397, name: "Tornillo 5cm", price:50, stock:390},
        { id: 400, name: "Ladrillo común", price:200, stock:500},
        { id: 401, name: "Ladrillo hueco", price:390, stock:300},
        { id: 402, name: "Ladrillo refractario", price:418, stock:400},
        { id: 403, name: "Ladrillo de vidrio", price:540, stock:1000},
       
    ];
    document.getElementById("subtotal").value = "";
  
    localStorage.setItem("productslistSave", JSON.stringify(productslist));

    for (var i = 0; i < productslist.length; i++) {
        tbody.innerHTML += `<tr><td>${productslist[i].name}</td><td>${productslist[i].id}</td><td>${JSON.stringify((productslist[i].id)).substring(2, 0)}</td><td>${productslist[i].price}</td><td>${productslist[i].stock}</td></tr>`;
    }
    localStorage.setItem("totalcompras", JSON.stringify(0));
    localStorage.setItem("totalventas", JSON.stringify(0));
   document.getElementById("btnIngresar").addEventListener("click", buttonIngresar);
});

const buttonIngresar = () => {

    let type;
    let idproduct = document.getElementById("ProductDescription").value; //Id del producto
    let subtotal = document.getElementById("subtotal").value;

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
     //   alert("No deben quedar campos vacíos");
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

