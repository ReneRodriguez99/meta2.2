const express = require('express');
const router = express.Router();
const donatario = require("../controladores/donatario");
router.get("/", donatario.getAll);
router.get("/:rfc", donatario.getByRFC);
router.post("/", donatario.add);
router.put("/:rfc", donatario.put);
router.delete("/:rfc", donatario.deleteElement);

module.exports = router;