Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }//for...in循环：遍历对象自身的和继承的可枚举的属性, 不能直接获取属性值。可以中断循环
}

for (let i of iterable) {
  console.log(i); 
  // logs 3, 5, 7
}

console.log(Object.keys(iterable));
//[ '0', '1', '2', 'foo' ]

/*
The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.

The for...of statement iterates over values that the iterable object defines to be iterated over.*/