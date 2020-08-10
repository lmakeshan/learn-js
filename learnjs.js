// typeof 返回值的类型
//一元运算符
console.log(typeof 4.5)
// => numbe/
console.log(typeof "x")
//=>string
console.log(- (10 - 2))
// -8
//布尔值
console.log(3 > 2)
// true
console.log(3 < 2)
// false
console.log("Aardvark" < "Zoroaster")
// true
console.log("Apple" == "orange")
// false
console.log(NaN == NaN)
//  false
//逻辑运算符
console.log(true && false)
// false
console.log(true && true)
// true
console.log(false || true)
// true
console.log(false || false)
// false
console.log(true ? 1 : 2);
// 1
console.log(false ? 1 : 2);
// 2
//自动类型切换
console.log(8 * null)
// 0
console.log("5" - 1)
// 4
console.log("5" + 1)
// 51
console.log("five" * 2)
// NaN
console.log(false == 0 )
// true
console.log(null == undefined);
// true
console.log(null == 0);
//false
//逻辑运算符的短路
console.log(null || "user")
// user
console.log("Anges" || "user")
// Anges
//第二章 程序结构
//绑定
let ten = 10;
console.log(ten * ten);
//100
let mood = "light";
console.log(mood);
// light
mood = " dark";
console.log(mood);
//dark
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// 105
let one = 1, two = 2;
console.log(one + two);
// 3
// var和const也可以创建绑定
var name = "Ayda";
const greeting = "Hello";
console.log(greeting + name);
// hello ayda
// 返回值
console.log(Math.max(2, 4));
// 4
console.log(Math.min(2, 4) + 100);
// 102
// while和do循环
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// 0
// 2
// 诸如此类
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// 1024
// for 循环
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// 0
// 2
// 诸如此类
let  mks = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  mks = mks * 2;
}
console.log(mks);
// 1024
// 跳出循环
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// 21
// 第三章  函数
const square = function(x) {
  return x * x;
};
console.log(square(12));
// 144
const makeNoise = function(){
  console.log("Pling!");
};
makeNoise();
// Pling
const power = function(base, exponent){
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *=base;
  }
  return result;
};
console.log(power(2, 10));
// 1024
