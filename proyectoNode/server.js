const cors = require("cors");
const express = require("express");
const proyectoRouter = require("./routes/proyecto");
const donatarioRouter = require("./routes/donatario");
const donadorRouter = require("./routes/donador");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/proyecto" ,proyectoRouter);
app.use("/donatario" ,donatarioRouter);
app.use("/donador" ,donadorRouter);

app.listen(3000, ()=>{
    console.log("Server en puerto 3000");
});



