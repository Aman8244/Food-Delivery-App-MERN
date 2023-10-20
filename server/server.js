const express = require("express");
const DBConfig = require("./DBConfig/config");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require("dotenv").config();
const PORT = parseInt(process.env.PORT);
DBConfig();
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})