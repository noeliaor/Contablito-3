document.addEventListener("DOMContentLoaded", () => {
    let content = `<option selected value="0"> Elige una opción </option>`
    let index = 0;
    let categoriesids=[];
    let categorieslist = JSON.parse(localStorage.getItem("categorieslistSave"));
    for (let item of categorieslist) {
        categoriesids[index]=item.idpadre;
        content += `<option value="${item.idpadre}">${item.name}</option>`
        index += 1;
        alert(index)
    }
    content += `<option value="new">Nueva categoría</option>`
    content += `</optgroup>`;
    document.getElementById("tocategories").innerHTML = content;
    
    document.getElementById("tocategories").addEventListener("change", function () {
        let categorytoproduct = document.getElementById("tocategories").value;
        if(categorytoproduct=="new"){
            document.getElementById("newcategory").innerHTML=`<div class="col-auto">
            <p class="font-weight-bold my-2">Ingrese el nombre de la nueva categoría:</p>
        </div>
        <div class="col-auto">
            <input class="form-control" type="search" id="newCategoryName" style="width:100px">
        </div>`
         categorytoproduct.value=Math.max(categoriesids);
         alert(categoriesids)
         categorieslist.push({ id: categorytoproduct.value, name:document.getElementById("newCategoryName").value});
         
         localStorage.setItem("categorieslistSave", JSON.stringify(categorieslist)); //Guardo la nueva vista

        }
    });
    document.getElementById("btnGuardar").addEventListener("click", function () {
        let listofproducts = JSON.parse(localStorage.getItem("productslistSave"));
        let newname = document.getElementById("newProductName").value;
        let newID = parseInt(categorytoproduct + document.getElementById("IDnewProduct").value);
        let newminstock = parseInt(document.getElementById("NewminStock").value);
        let newstock = parseInt(document.getElementById("initialCount").value);
        let newcost = parseInt(document.getElementById("newCost").value);
        

        if (listofproducts && newname && categorytoproduct && newID && newminstock && newstock && newcost) {
            if (findId(newID, listofproducts)) {
                listofproducts.push({ id: newID, name: newname, price: newcost, stock: newstock, minstock: newminstock });
                localStorage.setItem("productslistSave", JSON.stringify(listofproducts)); //Guardo la nueva vista

            } else {
                alert("Ya existe un producto con este ID, ingrese otro.")
            }
        } else {
            alert("Complete todos los campos.");
        }


    });

});

function findId(ID, list) {
    let status = true;
    for (let product of list) {
        if (ID == product.id) {
            status = false;
        }
    }
    return status;
}



