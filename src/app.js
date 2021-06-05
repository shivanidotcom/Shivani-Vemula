const express= require("express");
const path = require("path");
const hbs = require("hbs");
const app=express();
//connect to database
require("./db/conn");
const Register = require("./models/usermessage");
//postman

app.use(express.urlencoded({extended:false}));
const port = process.env.PORT || 3000;
//setting a path
const staticpath = path.join(__dirname,"../public");
const templatespath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");

//middleware
 //best way to include bootstrap and jquery in nodejs
app.use("/css",express.static(path.join(__dirname,"..node/modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"..node/modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"..node/modules/jquery/dist")));

app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views",templatespath);
hbs.registerPartials(partialspath);
//app routing
app.get("/",(req,res)=>{
    res.render("index");
})

//create user database
app.post("/contact",async(req,res)=>{
    try{
        
      //res.send(req.body);
      const userData = new Register(req.body);
     await userData.save();
     res.status(201).render("index");
    
       
    }catch(error){
        res.status(555).send(error);
    }

})
//create server
app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
})
