//ECMAscript--> Js --> V8 engine --> Node.js --> Bun
//HTTP -- protocol to communicate b/w machines, front end & BE ke beech communication
// HTTP servers...most common library to build them.........express.js
// 1. 200 - Everything is ok
// 2. 404 - Page/route not found
// 3. 403 - Authentication issues
// 4. 500 - Internal server error
// from front-end to backend , client can communicate to server via GET, POST, PUT, DELETE methods
 
const express =require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("Merry Christmas mf");
    //res.status(300).json({ successfull : true});
});



app.listen(3000, ()=>{
    console.log("server started");
});