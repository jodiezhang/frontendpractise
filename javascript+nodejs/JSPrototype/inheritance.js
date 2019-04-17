/*原型对象用来继承*/
var Person=function(name){
	this.name=name;
}

Person.prototype.getName=function(){
	return this.name;
}

var person1=new Person('Mickey');
console.log(person1.name);
console.log(person1.getName());
/*getName是通过Person.prototype设置的一个函数
对象属性，Person的实例（person1 普通对象继承了
这一属性）当函数执行时，两个this都指向person1*/
console.log('---------------------');
console.log(Person.prototype.constructor == Person);
console.log(person1.__proto__ == Person.prototype);
console.log(person1.constructor == Person);