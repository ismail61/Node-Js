var add = (a, b) => a + b;

function sub(a, b) {
    return (a > b) ? a - b : b - a;
    //return c;
}
console.log(add(5, 6));
console.log(sub(6, 5));

//module.exports = add;

// module.exports = {
//     add,
//     sub
// }
// console.log(module);
let main = require('./main');
console.log(main.ismail);
const path = require('path');
console.log(path.extname(__filename));