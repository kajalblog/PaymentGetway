const homeController=(req,res)=>{
    res.render("index.ejs", { name: "kajal" });
}
module.exports= {homeController}