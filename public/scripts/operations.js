// var web3 = require('./index.js');

var x = 10;
console.log('connected...');
function createNewAccount(){
    console.log("connecting...");
    web3.personal.newAccount('123456', function (err, res) {
        if(err){
            console.log(err);
        }
        console.log(res);
    })
};
