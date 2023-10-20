const URI = `mongodb+srv://jobsfinder447:<password>@amandev.s7rs1zh.mongodb.net/?retryWrites=true&w=majority`;
const mongoose = require("mongoose");

const DBConfig = ()=>{
  const connection = mongoose.connect(URI);
  connection.then(()=>{
    console.log("Database Connected");
  }).catch(err=>{
    console.log(`Error Occured in database connection: /n ${err}`);
  })
} 
module.exports = DBConfig;