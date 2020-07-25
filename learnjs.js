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


