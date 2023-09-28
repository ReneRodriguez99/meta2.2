const donador = require("../modelos/donador");

const getAll = async function (req,res){

    let p = donador.findAll();
    await res.json(p);

}

const getByRFC = async function(req,res){
    await res.json(donador.findByRFC(req.params.rfc))
}


const add = async function(req,res){
    console.log(req.body);
    const newDonador = donador.add(req.body);
    await res.json(newDonador);

}

const put = async function(req,res){

    const donadorRFC = req.params.rfc;
    const donadorIndex = donador.findIndexByRFC(donadorRFC);

    const nuevoDonador = req.body;

    donador.put(nuevoDonador,donadorIndex);
    console.log(nuevoDonador);
    await res.json(nuevoDonador);
    
}

const deleteElement = async function(req,res){

    const donadorRFC = req.params.rfc;
    const donadorIndex = donador.findIndexByRFC(donadorRFC);
    donador.deleteElement(donadorIndex);
    console.log("Elemento eliminado correctamente");
    res.json({ mensaje: 'Elemento eliminado correctamente' });
}

exports.getAll = getAll;
exports.getByRFC = getByRFC;
exports.add = add;
exports.put = put;
exports.deleteElement = deleteElement;