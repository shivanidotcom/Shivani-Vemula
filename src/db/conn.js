const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shivani:shivani@cluster0.ztvwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
})