const mongoose = require('mongoose'); 
const Chat = require("./models/chat.js");

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



let allChats = [
    {
        from:"Saqib",
        to:"Sadiq",
        msg:"Hi how are you",
        created_at: new Date()
    },
    {
        from:"Neha",
        to:"Sadiq",
        msg:"give me your notes",
        created_at: new Date()
    },
    {
        from:"Rohit",
        to:"Sharma",
        msg:"Bolna bro",
        created_at: new Date()
    },
    {
        from:"Sadiq",
        to:"Hani",
        msg:"When is the exam",
        created_at: new Date()
    },

]

Chat.insertMany(allChats);