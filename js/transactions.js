const showData = () => {
    let tbody = document.getElementById("totransactions");
    let list = JSON.parse(localStorage.getItem("transInfo")).reverse(); //Extraigo lista de transacciones
    for (let i = 0; i < list.length - 1; i++) {
        tbody.innerHTML += `<tr class="${list[i].type}"><td>${list[i].type}</td><td>${list[i].IVAtype}</td><td>$${list[i].total}</td><td>${list[i].product}</td><td>${list[i].date}</td><td>${list[i].user}</td></tr>`;
    }
}



//Función que devuelve el total de ventas o comparas para una fecha 
const getTotalSalePurchasesbyDay = (list, date, type) => {
    let total = 0;
    for (let i = 1; i < list.length; i++) {
        if ((date == list[i].date) && (type == list[i].type)) {
            total += parseInt(list[i].total);
        }
    }
    return total;
}


const viewChart = () => {

    let list = JSON.parse(localStorage.getItem("transInfo")); //lista de transacciones
    let auxDate = "";
    let dates = [];
    let amountSale = 0, amountPurchases = 0;
    let colAmountSale = [], colAmountPurchases = [];

    for (let i = 1; i < list.length; i++) {

        if (auxDate != list[i].date) {
            auxDate = list[i].date;
            dates.push(list[i].date);

            amountSale = getTotalSalePurchasesbyDay(list, auxDate, 'Venta');
            amountPurchases = getTotalSalePurchasesbyDay(list, auxDate, 'Compra');

            colAmountSale.push(amountSale);
            colAmountPurchases.push(amountPurchases);
        }

    }


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
            categories: dates, //fechas para el eje x, dates es un array
            /* accessibility: {
                 rangeDescription: 'Fecha'
             },*/
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
            data: colAmountSale //array de ventas
        }, {
            name: 'COMPRA',
            data: colAmountPurchases //array de compras
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
