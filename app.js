var express= require("express");
var app= express();
var request= require("request");
app.set('view engine', 'ejs');  //This is to set the view engine for all the ejs files.
app.use(express.static("public")); // to create public directory where all the attatchments can be stored.

// Root route
app.get('/', function(req, res){
    request('https://api.wazirx.com/api/v2/tickers', function(error, response, body){
        if(!error && response.statusCode==200){
            var data= JSON.parse(body); //to parse JSON into javascript object.
            res.render('results', {data : data});
        }
    });
});

//Server initialization
app.listen(3000, function(){
    console.log("server has started!!");
});