let express = require("express");
let dotenv = require("dotenv");
dotenv.config();
let Cors = require("cors")
let path = require("path");
let Database = require(path.join(__dirname,"utilities","Database"));
let Auth = require(path.join(__dirname,"module","auth.module"));
let BusRouter = require(path.join(__dirname,"module","bus.module"));
let BookRouter = require(path.join(__dirname,"module","booking.module"))
 
let app = express();
app.use(express.json());
app.use(Cors());
Database();

 
app.use("/api/auth",Auth);
app.use("/api",BusRouter);
app.use("/booking",BookRouter);



app.listen(process.env.PORT , ()=>{
    console.log(`Server connected on ${process.env.PORT}`);
    
})