const autos = [
{
    id: 1,
    producto: "Gol-Trend",
    img: "./img/gol trend",
    precio: 1400000,
    color: "Gris",
    categoria: "Segmento B",
    descripcion: "Auto Familiar",
    oferta: false
},
{
    id: 2,
    producto: "Amarok",
    img: "./img/amarok",
    precio: 4500000,
    color: "Negra",
    categoria: "Pick Up",
    descripcion: "Camioneta",
    oferta: false
},
{
    id: 3,
    producto: "Saveiro",
    img: "./img/saveiro",
    precio: 3000000,
    color: "Azul",
    categoria: "Pick Up Liviano",
    descripcion: "Utilitario",
    oferta: false
},
{
    id: 4,
    producto: "Vento",
    img: "./img/vento",
    precio: 4000000,
    color: "Celeste",
    categoria: "Segmento-A",
    descripcion: "Auto Empresarial",
    oferta: false
},
{
    id: 5,
    producto: "T-Cross",
    img: "./img/t cros",
    precio: 3500000,
    color: "Azul Oscuro",
    categoria: "Suv",
    descripcion: "Camioneta Familiar",
    oferta: true
},
{
    id: 6,
    producto: "Audi A3",
    img: "./img/audi a3",
    precio: 4500000,
    color: "Celeste",
    categoria: "Deportivo",
    descripcion: "Deportivo Familiar",
    oferta: true
},
{
    id: 7,
    producto: "Audi A4",
    img: "./img/audi a4",
    precio: 5500000,
    color: "Azul",
    categoria: "Deportivo",
    descripcion: "Deportivo Familiar",
    oferta: true
},
{
    id: 8,
    producto: "Audi Q5",
    img: "./img/audi q5",
    precio: 6000000,
    color: "Gris",
    categoria: "Suv",
    descripcion: "Camioneta Familiar",
    oferta: false
},
{
    id: 9,
    producto: "Audi TT",
    img: "./img/audi tt",
    precio: 6300000,
    color: "Azul",
    categoria: "Deportivo",
    descripcion: "Deportivo",
    oferta: false
},
{
    id: 10,
    producto: "Audi R8",
    img: "./img/audi r8",
    precio: 9000000,
    color: "Blanco",
    categoria: "Super",
    descripcion: "Super Deportivo",
    oferta: false
},
{
    id: 11,
    producto: "Camaro",
    img: "./img/camaro",
    precio: 8800000,
    color: "Negro",
    categoria: "Muscle",
    descripcion: "Deportivo",
    oferta: false
},
{
    id: 12,
    producto: "Corsa",
    img: "./img/corsa",
    precio: 1000000,
    color: "gris",
    categoria: "Segmento-B",
    descripcion: "Auto Familiar",
    oferta: false
},
{
    id: 13,
    producto: "Cruze",
    img: "./img/cruze",
    precio: 5000000,
    color: "Azul Oscuro",
    categoria: "Segmento-A",
    descripcion: "Auto Empresarial",
    oferta: false
},
{
    id: 14,
    producto: "Onix",
    img: "./img/onix",
    precio: 2400000,
    color: "Rojo",
    categoria: "Segmento-B",
    descripcion: "Auto Familiar",
    oferta: false
},
{
    id: 15,
    producto: "Sonic",
    img: "./img/sonic",
    precio: 3400000,
    color: "Naranja",
    categoria: "Segmento-B",
    descripcion: "Auto Familiar",
    oferta: false
}
]
console.log(autos)

for (let i = 0; i < autos.length; i ++){
    console.log(autos[i].oferta)
    if (autos[i].oferta === true){
        console.log(`El auto ${autos[i].producto} Tiene un 10% de descuento por pago adelantado`)
    }
}
const listaOrdenadaAutos = [...autos].sort((a,b) => {
    if ( a.producto < b.producto ){
        return -1
    } else if ( a.producto > b.producto){
        return 1
    } else {
        return 0
    }
})
console.log(autos)
console.log(listaOrdenadaAutos)

confirm(`Quieres ver los descuentos que tenemos disponibles?`)
const ofertasAutos = autos.filter(oferta => {
    if (oferta.oferta === true) {
        return true;
    } else {
        return false;
    }
})
console.log(ofertasAutos)

function buscarAuto(){

    let buscarAutos = prompt (`Los autos que tenemos disponibles son: Amarok, GolTrend, Saveiro, TCross, Vento, AudiA3, AudiA4, AudiQ5, AudiR8, AudiTT, Camaro, Corsa, Cruze, Sonic y Onix`);
    if (buscarAutos == "") {
    
        alert("No ingresaste el nombre del auto");
    }
    else {
        const auto = autos.find ((producto, i) => {
            return producto.producto === buscarAutos
        })
        alert(`El auto selecionado es ${buscarAutos} `)
    }
    
}

buscarAuto()