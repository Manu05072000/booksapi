//frame works
const express=require("express");
//database
const database=require("./database/index");

//initializing express
const shapeAI=express();

//configuration
shapeAI.use(express.json());

shapeAI.get("/",(req,res) =>{
return res.json({books:database.books});
});


shapeAI.listen(3000, ()=> console.log("server running!!!"));

