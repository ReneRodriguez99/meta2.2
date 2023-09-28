const donador = [
    {
        rfc: 80,
        Nombre: "Pedro",
        ProyectosAsociados: "Alimentos",
        CantidadDonada: "100 MXN",
        Imagen: "pedro.jpg"
        
    },
    {
        rfc: 10,
        Nombre: "Kevin",
        ProyectosAsociados: "Albergue perros",
        CantidadDonada: "200 MXN",
        Imagen: "kevin.jpg"
    }

]

const findAll = function(){
    return donador;
}

const findByRFC = function (rfc) {

    let p = donador.find(e => e.rfc == rfc);
    return p;
}

const add = function(d){

    donador.push(d);
    return d;
}

const findIndexByRFC = function(rfc){

    donadorIndex = donador.findIndex(e => e.rfc == rfc);

    return donadorIndex;
}

const put = function(d,index){

    donador[index]= d;

}

const deleteElement = function(index){

    donador.splice(index,1);
}

exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.findIndexByRFC = findIndexByRFC;
exports.add = add;
exports.put = put;
exports.deleteElement = deleteElement;