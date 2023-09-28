const express = require('express');
const router = express.Router();
const donador = require("../controladores/donador");
router.get("/", donador.getAll);
router.get("/:rfc", donador.getByRFC);
router.post("/", donador.add);
router.put("/:rfc", donador.put);
router.delete("/:rfc", donador.deleteElement);

module.exports = router;