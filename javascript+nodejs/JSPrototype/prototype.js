
function Person() {}/*每一个函数对象都有一个prototype属性，这个属性指向函数的
原型对象
每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性*/
Person.prototype.name = 'Zaxlct';//Person.prototype就是原型对象
Person.prototype.age  = 28;
Person.prototype.job  = 'Software Engineer';
Person.prototype.sayName = function() {
  console.log(this.name);
}
/*在默认情况下，所有原型对象都会自动获得一个constructor(构造函数属性)，它指向
prototype属性所在的函数*/
console.log(Person.prototype.constructor == Person);//true

var person1 = new Person();
person1.sayName(); // 'Zaxlct'
console.log(person1.constructor==Person);//true
console.log(Person.prototype.constructor==Person);//true
/*person1是Person的实例，Person.prototype原型对象也是Person的实例
原型对象就是普通对象，但是Function.prototype除外*/

var person2 = new Person();
person2.sayName(); // 'Zaxlct'

console.log(person1.sayName == person2.sayName); //true 



console.log('-------------');
 console.log(Person.prototype) //Person{}
 console.log(typeof Person.prototype) //Object
 console.log(typeof Function.prototype) // Function，这个特殊
 console.log(typeof Object.prototype) // Object
 console.log(typeof Function.prototype.prototype) //undefined