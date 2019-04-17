//var obj={};
var obj=new Object();
console.log(obj.constructor===Object);

var b = new Array();
console.log(b.constructor === Array);
console.log(b.__proto__ === Array.prototype);

var c = new Date(); 
console.log(c.constructor === Date);
console.log(c.__proto__ === Date.prototype);

var d = new Function();
console.log(d.constructor === Function);
console.log(d.__proto__ === Function.prototype);

var e = new Number(); 
console.log(e.constructor === Number);
console.log(e.__proto__ === Number.prototype);

var f = new String(); 
console.log(f.constructor === String);
console.log(f.__proto__ === String.prototype);

var g = new Boolean(); 
console.log(g.constructor === Boolean);
console.log(g.__proto__ === Boolean.prototype);

console.log('++++++++++++++');
console.log(Object.prototype);//{}
console.log(Object.prototype.__proto__);//null