let mongoose = require("mongoose");

 function Database(){
    
    try {
       mongoose.connect(process.env.DATABASE) 
       console.log("Database Connected Successfully ");
       
    } 
    catch (error) {
        console.log("Error to connect the database" );
        
    }

}

module.exports = Database;