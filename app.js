const express=require('express');
const app=express();
const port=4800;
const MyRoute=require('./routes/router.js');
const web=require('./routes/web.js');
const cors=require('cors');

app.use(cors())
app.use('/check',MyRoute);
app.use('/web',web);
app.get("/",(req,res)=>{
    console.log("testing");
})
app.listen(port,()=>{
    console.log(`Your app listing on ${port}`)
})