//importing express
const express = require('express');

//creating express app
const app = express();

//creating route handler
app.get('/',(req,res)=>{
    res.send({hi:'there'});
});

//port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
// app: Express app to register this route handler with
// get : Wathc incoming requests with this method
// "/": Watch for request trying to access "/"
// req: Object representing the incoming request
// res : Object representing the outgoing response