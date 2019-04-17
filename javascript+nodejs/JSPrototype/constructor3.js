console.log(Number.__proto__ === Function.prototype);  // true
console.log(Number.constructor == Function); //true

console.log(Boolean.__proto__ === Function.prototype); // true
console.log(Boolean.constructor == Function); //true

console.log(String.__proto__ === Function.prototype);  // true
console.log(String.constructor == Function); //true

// 所有的构造器都来自于Function.prototype，甚至包括根构造器Object及Function自身
console.log(Object.__proto__ === Function.prototype);  // true
console.log(Object.constructor == Function); // true

// 所有的构造器都来自于Function.prototype，甚至包括根构造器Object及Function自身
console.log(Function.__proto__ === Function.prototype); // true
console.log(Function.constructor == Function); //true

console.log(Array.__proto__ === Function.prototype);   // true
console.log(Array.constructor == Function); //true

console.log(RegExp.__proto__ === Function.prototype);  // true
console.log(RegExp.constructor == Function); //true

console.log(Error.__proto__ === Function.prototype);   // true
console.log(Error.constructor == Function); //true

console.log(Date.__proto__ === Function.prototype);    // true
console.log(Date.constructor == Function); //true

console.log('--------------');

console.log(Math.__proto__ === Object.prototype);  // true
console.log(Math.construrctor == Object); // true

console.log(JSON.__proto__ === Object.prototype);  // true
console.log(JSON.construrctor == Object); //true

console.log('--------------');
// 函数声明
function Person() {}
// 函数表达式
var perosn = function() {}
console.log(Person.__proto__ === Function.prototype) // true
console.log(perosn.__proto__ === Function.prototype)    // true

/*所有的构造器都来自于 Function.prototype，甚至包括根构造器Object及Function自身。
所有构造器都继承了·Function.prototype·的属性及方法。如length、call、apply、bind*/
console.log(typeof Function.prototype) // function
console.log(typeof Object.prototype)   // object
console.log(typeof Number.prototype)   // object
console.log(typeof Boolean.prototype)  // object
console.log(typeof String.prototype)   // object
console.log(typeof Array.prototype)    // object
console.log(typeof RegExp.prototype)   // object
console.log(typeof Error.prototype)    // object
console.log(typeof Date.prototype)     // object
console.log(typeof Object.prototype)   // object

console.log(Function.prototype);

/*这说明所有的构造器也都是一个普通 JS 对象，可以给构造器添加/删除属性等。
同时它也继承了Object.prototype上的所有方法：toString、valueOf、hasOwnProperty等。*/