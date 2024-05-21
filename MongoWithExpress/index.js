const express = require("express");
const mongoose = require('mongoose');
const app = express();
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));   // folderName yeh views karko hai na wo 
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"public")));

main().then(()=>{
    console.log("connection is successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const chat1 = new Chat({
    from:"saqib",
    to:"sagheer",
    msg: "Hi how are you",
    created_at: new Date()
});

chat1.save().then((res)=>{
    console.log(res);
}).catch((err)=>console.log(err));

// Index Route :  where it means we can see all the data
app.get("/chats", async(req,res)=>{
    let chats = await Chat.find();
    console.log(chats)
    res.render ("index.ejs", {chats});
})

app.get("/", (req,res)=>{
    res.send("root is working fine")
});


app.listen(8080, ()=>{
    console.log("server is listening to the port 8080");
});


