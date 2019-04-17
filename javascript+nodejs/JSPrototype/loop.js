function* foo(){//defines a generator function, which returns a Generator object.
	yield 1;
	yield 2;
}

for(let o of foo()){
	console.log(o);
}
console.log('1--------');

let iterable=[10,20,30];
for(let value of iterable){
	value+=1;
	console.log(value);
}

console.log('2--------');
//let iterable = [10, 20, 30];
for (const value of iterable) {
  console.log(value);
}
console.log('3--------');
for (var value of iterable) {
  console.log(value);
}

console.log('4--------');
iterable = 'boo';

for (let value of iterable) {
  console.log(value);
}
console.log('5--------');
iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
console.log('6--------');
iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

console.log('7--------');
iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
console.log('8--------');
(function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);
console.log('9--------');
function* foo(){ 
  yield 1; 
  yield 2; 
  yield 3; 
}; 

for (let o of foo()) { 
  console.log(o); 
  break; // closes iterator, execution continues outside of the loop
}
console.log('done');

console.log('10--------');
function* fibonacci() { // a generator function
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
}
