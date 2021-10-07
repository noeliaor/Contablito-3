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
});