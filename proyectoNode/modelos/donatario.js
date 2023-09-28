const donatario = [
    {
        rfc: 123,
        Nombre: "Juan",
        ProyectoAsociado: "Alimentos",
        Imagen: "juan.jpg"
        
    },
    {
        rfc: 456,
        Nombre: "Jose",
        ProyectoAsociado: "Albergue perros",
        Imagen: "jose.jpg"
    }

]

const findAll = function(){
    return donatario;
}

const findByRFC = function (rfc) {

    let p = donatario.find(e => e.rfc == rfc);
    return p;
}

const add = function(d){

    donatario.push(d);
    return d;
}

const findIndexByRFC = function(rfc){

    donatarioIndex = donatario.findIndex(e => e.rfc == rfc);

    return donatarioIndex;
}

const put = function(d,index){

    donatario[index]= d;

}

const deleteElement = function(index){

    donatario.splice(index,1);
}

exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.findIndexByRFC = findIndexByRFC;
exports.add = add;
exports.put = put;
exports.deleteElement = deleteElement;