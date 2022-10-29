var express = require('express');
var app = express();
var PORT = 3000;
 
app.get('/', function(req, res, next){
    res.json({title: "FlyDukky is Flying..."})
    next();
})

app.get('/sign', function(req, res){
    const { walletAddress } = req.query;
    res.json({ Address: walletAddress })
}) 
 
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});