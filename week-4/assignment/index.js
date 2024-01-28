const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://jj:sonisoni@cluster0.msnztf8.mongodb.net/noty?retryWrites=true&w=majority"
  ).then(()=>{
    console.log("mongo baby");
  });

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    Courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    Courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let user= req.headers.username;
    let pass=req.headers.password;

    let obj = Admin.findOne({username:user});
    if(obj===null){
        res.status(403).json("not found");
    }else{
        if(obj.password===pass){
            next();
        }
        res.status(403).json("wrong password");
    }
    
}



function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}
