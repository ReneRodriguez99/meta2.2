const proyecto = [
    {
        id: 1,
        Nombre: "Alimentos",
        Descripcion: "Fondita",
        Imagen: "fondita.jpg",
        Donatario: "Juan",
        Donador: "Pedro",
        CantidadDonada: "5 MXN"
    },
    {
        id: 2,
        Nombre: "Albergue perros",
        Descripcion: "Hogar para perritos",
        Imagen: "albergue.jpg",
        Donatario: "Jose",
        Donador: "Kevin",
        CantidadDonada: "60 MXN"
    }

]

const findAll = function(){
    return proyecto;
}

const findById = function (id) {

    let p = proyecto.find(e => e.id == id);
    return p;
}

const add = function(p){

    proyecto.push(p);
    return p;
}

const findIndexById = function(id){

    proyectoIndex = proyecto.findIndex(e => e.id == id);

    return proyectoIndex;
}

const put = function(p,index){

    proyecto[index]= p;

}

const deleteElement = function(index){

    proyecto.splice(index,1);
}


exports.findAll = findAll;
exports.findById = findById;
exports.findIndexById = findIndexById;
exports.add = add;
exports.put = put;
exports.deleteElement = deleteElement;