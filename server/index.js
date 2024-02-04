const express= require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
require('dotenv').config();
require('./config/config');
app.post('login')
const router=require('./routers/router');
app.use(router);
const port=process.env.PORT || 5001 
app.listen(port,()=>{
console.log(`server is listening on port = ${port}`);
});
