const express = require("express"); 
const cors = require("cors")
const appRouter = require("./routes/appRoute.js")
const dotenv = require("dotenv"); 
dotenv.config() ;
const app = express(); 
app.use(cors({
    origin: "*"
})); 
app.use(express.json()) 
app.use("/app",appRouter)

app.get("/",(_,res)=> {
    res.send("hellow")
})
app.listen(process.env.PORT,() => `
server is running on port 
${process.env.PORT}
`) 

console.log("all fine")