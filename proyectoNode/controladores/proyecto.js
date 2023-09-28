const proyecto = require("../modelos/proyecto");

const getAll = async function (req,res){

    let p = proyecto.findAll();
    await res.json(p);

}

const getById = async function(req,res){
    await res.json(proyecto.findById(req.params.id))
}

const add = async function(req,res){
    console.log(req.body);
    const newProyecto = proyecto.add(req.body);
    await res.json(newProyecto);

}

const put = async function(req,res){

    const proyectoId = req.params.id;
    const proyectoIndex = proyecto.findIndexById(proyectoId);

    const nuevoProyecto = req.body;

    proyecto.put(nuevoProyecto,proyectoIndex);
    console.log(nuevoProyecto);
    await res.json(nuevoProyecto);
    
}


const deleteElement = async function(req,res){

    const proyectoId = req.params.id;
    const proyectoIndex = proyecto.findIndexById(proyectoId);
    proyecto.deleteElement(proyectoIndex);
    console.log("Elemento eliminado correctamente");
    res.json({ mensaje: 'Elemento eliminado correctamente' });
}


exports.getAll = getAll;
exports.getById = getById;
exports.add = add;
exports.put = put;
exports.deleteElement = deleteElement;