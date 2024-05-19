const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>console.log(err));


async function main() {
 await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
// till above we made the connection 

// below defining the schema 

const bookSchema = new mongoose.Schema({
    // title:String,
    // author:String,
    // price:Number

    //OR

    title:{
        type:String,
        required:true,     // means title should be mentioned else it will throw an error 
    },
    author:{
        type:String,
    },
    price:{
        type:Number
    }
})

// creating a model 

const Book = mongoose.model("Book",bookSchema);

// inserting the data in Book 

const book1 = new Book({
    title:"MathsI",
    author:"RD Sharma",
    price:600,
});

const book2 = new Book({
  // this will throw an error as we have given required: true in title schema
    author:"RD Sharma",
    price:600,
});



// saving the data(book1)

book1.save().then((res)=>{
    console.log(res)
}).catch((err)=>console.log(err));


book2.save().then((res)=>{
    console.log(res)
}).catch((err)=>console.log(err));


// there are many other schema options like enum , 