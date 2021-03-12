/**
 * const,letの変数宣言
 */

// const boo = "boo";
// console.log(boo);

/**
 * オブジェクトの定義
 */

// const boo = { name:"たぬき", age: 14 };
// console.log(boo)

/**
 * 配列
 */

//  const boo =["きつね","ねこ"];
//  boo.push("たぬき");
//  console.log(boo[0]);
//  console.log(boo[2]);

/**ログにテンプレート文字列を入れてもだめ */
// const name = "boo";
// const age = 14;
// console.log('私の名前は${name}です。年齢は${age}です。');

const name = "boo";
const age = 14;
const messege = `私の名前は${name}です。年齢は${age}です。`;
console.log(messege);

/**
 * アロー関数
 */

// //従来の関数
// function func1(x) {
//   return x + 1;
// }
// console.log(func1("4"));

// const func1 = function (x) {
//   return x + 1;
// };
// console.log(func1("4"));

// const func1 = (x) => {
//   return x + 1;
// };
// console.log(func1("4"));

//一行で処理が終わる場合、return｛｝省略して一行でかける

// const func1 = (x) => x + 1;
// console.log(func1("4"));

// const boosan = (num1, num2) => num1 + num2 + num1 * 3;
// console.log(boosan(4, 5));

// 分割代入

const booBody = {
  name: "boo",
  age: 14
};

const messege1 = `私の名前は${booBody.name}です。`;
console.log(messege1);

// const { name, age } = booBody;
// const messege5 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(messege5);
