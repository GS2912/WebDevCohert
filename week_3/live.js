const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const mongoose= require("mongoose");

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "garvsoni2912@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  }
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let jj =ALL_USERS.filter((item)=>{
    return item.username===username && item.password===password
  });
  if(jj.length!==0){
    return true;
  }else{
    return false;
  }
}


mongoose.connect(
    "mongodb+srv://jj:1Million$@cluster0.msnztf8.mongodb.net/locaa?retryWrites=true&w=majority"
  ).then(()=>{
    console.log("mongo baby");
  });

  const userSchema = new mongoose.Schema ({
    age: String,
    username: String,
    pasword: String,
  });
const User = new mongoose.model("User",userSchema );
app.post("/signup", async function (req, res) {

  const username = req.body.username;
  const password = req.body.password;
  const age= req.body.age;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

  const kitty =new User({age:age ,username: username, password:password}) ;
  kitty.save();

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    // let kk= ALL_USERS.filter((i)=>{
    //     return i.username!==username;
    // });
    // return res.json(kk);
    console.log(username);
    const kk =await User.find({username:username}); 
    return kk.age;
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});



app.listen(3000)