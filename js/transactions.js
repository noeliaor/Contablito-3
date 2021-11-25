const showData = () => {
    let tbody = document.getElementById("totransactions");
    let list = JSON.parse(localStorage.getItem("transInfo")).reverse(); //Extraigo lista de transacciones
    for (let i = 0; i < list.length - 1; i++) {
        tbody.innerHTML += `<tr class="${list[i].type}"><td>${list[i].type}</td><td>${list[i].IVAtype}</td><td>$${list[i].total}</td><td>${list[i].product}</td><td>${list[i].date}</td><td>${list[i].user}</td></tr>`;
    }
}

const viewChart = () => {

    let list = JSON.parse(localStorage.getItem("transInfo")).reverse(); //Extraigo lista de transacciones
    let auxDate = "";
    let dates = [];
    let amountSale;

    for (let i = 0; i < list.length - 1; i++) {
        if (auxDate != list[i].date){
            auxDate = list[i].date;
            dates.push(list[i].date);
        }
        
        //Aca falta sumar totales por compra y venta para mostrarlos (*)
        amountSale
    }

    console.log("dates: " + dates);

    Highcharts.chart('container', {

        title: {
            text: 'Compras - Ventas'
        },

        // subtitle: {
        //   text: 'Source: thesolarfoundation.com'
        // },

        yAxis: {
            title: {
                text: 'Importe'
            }
        },

        xAxis: {
            categories: dates,
            accessibility: {
                rangeDescription: 'Fecha'
            },
            title: {
                text: 'Fecha'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
              series: {
                label: {
                  connectorAllowed: false
                }
            //     pointStart: 2010
              }
        },

        series: [{
            name: 'VENTA',
            data: [43934]   //(*)
        }, {
            name: 'COMPRA',  //(*)
            data: [24916]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 800
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
};


document.addEventListener("DOMContentLoaded", () => {
    showData();


    document.getElementById("btnChart").addEventListener("click", viewChart);

});
