const showData = () => {
    let tbody = document.getElementById("totransactions");
    let list = JSON.parse(localStorage.getItem("transInfo")).reverse(); //Extraigo lista de transacciones
    for (let i=0; i<list.length-1; i++) {
       tbody.innerHTML += `<tr class="${list[i].type}"><td>${list[i].type}</td><td>${list[i].IVAtype}</td><td>$${list[i].total}</td><td>${list[i].product}</td><td>${list[i].date}</td><td>${list[i].user}</td></tr>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showData();
});
