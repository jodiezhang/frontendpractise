function Person(name) {
    this.name = name
}
// 修改原型
Person.prototype.getName = function() {}
var p = new Person('jack')
console.log(p.__proto__ === Person.prototype) // true
console.log(p.__proto__ === p.constructor.prototype) // true



// function Person(name) {
//     this.name = name
// }
// 重写原型
Person.prototype = {
    getName: function() {}
}
var p = new Person('jack');
//console.log(p.__proto__ === Person.prototype);// true
console.log(Person.prototype);
//console.log(p.__proto__ === p.constructor.prototype);// false
//console.log(p.constructor);
console.log(p.constructor.prototype); //采用对象直接量方式定义的对象构造器是object,
//object.prototype 是一个空对象
//console.log(p.constructor.prototype===Person.prototype); 


//console.log(Function.prototype);
