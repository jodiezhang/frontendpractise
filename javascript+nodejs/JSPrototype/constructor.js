function Person(name,age,job){
   this.name=name;
   this.age=age;
   this.job=job;
   this.sayName=function(){alert(this.name);}
}

var person1=new Person('Amy',28,'Engineer');
var person2=new Person('Helen',34,'Product Manager');
/*上面的例子中 person1 和 person2 都是 Person 的实例。
这两个实例都有一个 constructor （构造函数）属性，该属性（是一个指针）指向 
Person。 即：
*/
console.log(person1.constructor==Person);//true
console.log(person2.constructor==Person);//true
/*我们要记住两个概念（构造函数，实例）：
person1 和 person2 都是 构造函数 Person 的实例
一个公式：
实例的构造函数属性（constructor）指向构造函数。*/