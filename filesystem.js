const fs = require('fs');

// fs.readFile(__dirname + '/file.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// console.log("Async");

//remove file
// fs.unlink(__dirname + '/file.txt', (err, data) => {
//     if (err) throw err;
//     console.log("deleted File");
// })

// try {
//     const dta = fs.readFileSync(__dirname + '/file.txt', 'utf8');
//     console.log(dta);
// } catch (error) {
//     console.log(error);

// } finally {
//     console.log("Finally statemenet");
// }
// console.log("Sync");

//Json Object
var Obj = {
    name: 'Ismail Hosen',
    Roll: 2017831061,
    Address: {
        Home: 'Chapai Nawabgonj ',
        Current_Home: 'Sylhet'
    }
}
var data = JSON.stringify(Obj);
fs.writeFile('./hello.json', data, (err) => {
    if (err) throw err;
})
fs.readFile('./hello.json', 'utf8', (err, data) => {
    if (err) throw err;
    var dta = JSON.parse(data);
    console.log(dta)
})