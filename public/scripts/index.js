const express = require('express');
var Web3 = require('web3');
var fs = require('fs');
// const path = require('path');

var app = new express();
var web3 = new Web3();
// const publicPath = path.join(process.cwd(),'/scripts/operations.js');

//conneting to web3 provider
web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/NAUugrNXeVhCS0ClcwmA"));



// console.log(publicPath);
var port = process.env.PORT || 5051;



app.listen(port, function(err,res){
    if(!err) {
        console.log("Server running on port: ", port);
    }
});
app.get("/", function (req, res) {
   res.writeHead(200,{"Context-type":"text/html"});
    fs.createReadStream("./../index.html").pipe(res);
});

module.exports = {web3};