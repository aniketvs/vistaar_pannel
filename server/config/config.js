const mongoose=require('mongoose');
const Url= process.env.Url.toString();
mongoose.connect(Url).then(()=>{
    console.log("db is connected");
}).catch(()=>{
    console.log("something went wrong");
})
