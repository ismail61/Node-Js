// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.write("hello World");
//     res.end();
// });
// server.listen(5000);
// console.log("server run");
// var age = 19;
// if (age > 18) {
//     console.log('over 18 years');
// } else {
//     console.log('under 18 years');
// }
var a = 10;
var b = 50;
console.log(global.a);

function output(a, b) {
    c = a + b;
    console.log("The addition of " + a + " and " +
        b + " is " + c);
}
output(a, b);
module.exports.ismail = a + b;

setTimeout(() => {
    console.log("SetTimout Start ")
}, 500);