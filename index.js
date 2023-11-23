const express = require("express"); 

const app = express(); 
const listeningPort = process.env.PORT || 3000; 

app.get("/", (req, res) => { 
    res.send("base page"); 
}); 

app.listen(listeningPort, () => { 
    console.log(`Server started. API is listening on port ${listeningPort}`); 
});