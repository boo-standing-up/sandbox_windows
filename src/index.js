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

// const name = "boo";
// const age = 14;
// const messege = `私の名前は${name}です。年齢は${age}です。`;
// console.log(messege);

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

// const booBody = {
//   name: "boo",
//   age: 14,
//   top: "150cm"
// };

// const messege1 = `私の名前は${booBody.name}です。`;
// console.log(messege1);

// const { name, age, top } = booBody;
// const messege5 = `私の名前は${name}です。年齢は${age}です。身長は${top}です。`;
// console.log(messege5);

/**
 * デフォルト値
//  */

// const ichikumi = ["tarou" ,"jirou","saburou"];
// // console.log(ichikumi);
//  const sayHollo = (name="ゲスト")=>console.log(`こんにちは${name}さん`);
// sayHollo(ichikumi);

/**
 * スブレット構文
 */

//  const classname=["tarou","jirou","saburou","boo"];
//  console.log(classname);
//  console.log(...classname);

// const classname1 = ["tarou", "jirou", "saburou", "boo"];
// const classname2 = ["hanako", "kaede", "ayaka", "booko"];
//  const className =(classname1,classname2)=>
//  console.log(`このクラスは${classname1}${classname2}です。`);

// className(...classname2);

//まとめる構文
// const [no1,no2,...className3]=classname1;
// console.log(no2);
// console.log(className3);

// コピーと統合
// const classAll = [...classname1, ...classname2];
// console.log(classAll);
// classAll[2] = "sabutarou";

/**
 * mapやフィルターを使った配列の処理
//  */
// const ichikumi = ["tarou", "jirou", "saburou", "boo"];
// const classname1 = ichikumi.map((name) => {
//   return name;
// });
// // console.log(classname1); //1番
// ichikumi.map((name) => console.log(name));//２番

const classname1 = ["tarou", "jirou", "saburou", "boo"];
const classname2 = ["hanako", "kaede", "ayaka", "booko"];
const numClass = [1, 2, 3, 4];
// const classAll = [...classname1, ...classname2];
// classAll.map((name)=>console.log(name));
// const kisuu = numClass.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(kisuu);

const classAll = [...classname1, ...classname2];
// classAll.map((name, index) =>
//   console.log(`あなたは${index + 1}位の${name}さんです`)
// );

const bookumisan = classAll.map((name) => {
  if (name === "boo") {
    return `あなたは${name}です`;
  } else {
    return `あなたは${name}さんです`;
  }
});
console.log(bookumisan);
