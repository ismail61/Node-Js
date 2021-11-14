// console.log(__dirname);
// console.log(__filename);
// var raj = require('./main');
// console.log(raj.ismail);

//object create

// const a = {
//     name: 'ismail',
//     age: 25,
//     email: 'ismail@gmail.com'
// }
// a.email = 'raj@gmail.com';
// a.age = 23;
// console.log(a.email);
// console.log('Hi ' + a.email + ' what is your age ? ');
// console.log('My name is %s ', a.name);

//create class
class users {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getname() {
        return this.name;
    }
    getage() {
        return this.age;
    }
}
var user = new users('ismail', 23);
console.log(user.getage);