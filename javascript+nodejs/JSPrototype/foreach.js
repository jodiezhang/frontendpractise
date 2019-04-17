var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"


var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

//The map() method creates a new array with the results of calling a provided function on every element in the calling array.
//map: 只能遍历数组，不能中断，返回值是修改后的数组。