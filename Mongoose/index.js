const mongoose = require('mongoose');
main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>console.log(err));

async function main() {
 await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
});

const User = mongoose.model("User",userSchema);

// const user1 = new User({
//     name:"Adam",
//     age:24,
//     email:"adamyahoo@s.in",
// });   // to insert this in database type node then =>  .load index.js => ctrl+k

// const user2 = new User({
//     name:"Eve",
//     age:22,
//     email:"eveahoo@s.in",
// });   

// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>console.log(err))

// user1.save();   // this will save in database


// to insert many users 

User.insertMany([
    {name:"Tony", age: 30, email: "tony@gmail.com"},
    {name:"Steven", age:29, email: "steven@gmail.com"},
    {name:"Paris" , age: 56, email:"paris@gmail.com"}
]).then((res)=>{console.log(res)});

// make sure to uncomment down all the topics individually


// find operation : its not a promise but still we can use .then

// User.find({age:{$gt:29}}).then((res)=>{
//     console.log(res)  // or  we can also filter the data which is coming like this console.log(res[0].name) this will give the name
// }).catch((err)=>console.log(err));

//findOne :  it will find only one user 
//findById : finding the user by his Id 

// User.findById("6649c6207a8c0f1b45ca295f").then((res)=>{
//     console.log(res);
// }).catch((err)=>{console.log(err)})


User.findOne({_id:"6649c6207a8c0f1b45ca295f"}).then((res)=>{
    console.log(res);
}).catch((err)=>{console.log(err)})


// updateOne and updateMany : updateOne will update the first value and updateMany will update all the values
// findOneAndUpdate
User.updateOne({name:"steven"}, {age:25}).then((res)=>{
    console.log(res);
}).catch((err)=>{console.log(err)})



User.updateMany({age:{$gt:25}}, {age:35}).then((res)=>{
    console.log(res);
}).catch((err)=>{console.log(err)})


// fineOneAndUpdate will find and print then it will update , if we want to print the updated value will give new: true ,
// the main difference b/w findOneAndUpdate and findOne is findOneAndUpdate will not give any additional information like modified =2 etc etc where as findOne will give
User.findOneAndUpdate({name: "tony"}, {age:35}, {new:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{console.log(err)})

// deleteOne , deleteById, findByIdAndDelete, findOneAndDelete