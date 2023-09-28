const donatario = require("../modelos/donatario");

const getAll = async function (req,res){

    let p = donatario.findAll();
    await res.json(p);

}

const getByRFC = async function(req,res){
    await res.json(donatario.findByRFC(req.params.rfc))
}



const add = async function(req,res){
    console.log(req.body);
    const newDonatario = donatario.add(req.body);
    await res.json(newDonatario);

}

const put = async function(req,res){

    const donatarioRFC = req.params.rfc;
    const donatarioIndex = donatario.findIndexByRFC(donatarioRFC);

    const nuevoDonatario = req.body;

    donatario.put(nuevoDonatario,donatarioIndex);
    console.log(nuevoDonatario);
    await res.json(nuevoDonatario);
    
}


const deleteElement = async function(req,res){

    const donatarioRFC = req.params.rfc;
    const donatarioIndex = donatario.findIndexByRFC(donatarioRFC);
    donatario.deleteElement(donatarioIndex);
    console.log("Elemento eliminado correctamente");
    res.json({ mensaje: 'Elemento eliminado correctamente' });
}

exports.getAll = getAll;
exports.getByRFC = getByRFC;
exports.add = add;
exports.put = put;
exports.deleteElement = deleteElement;