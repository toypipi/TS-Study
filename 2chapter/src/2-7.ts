/**
 * 常用的 TS 数据类型
 * 基本类型 number,string,boolean,symbol,null,undefined
 * 跟类型 Object,{}
 * 对象类型 Array,object,function
 * 枚举 enum
 * 其他特殊类型 any,unknown,never,void,tuple,可变元组
 * 合成类型 联合类型，交叉类型
 * 字面量数据类型
 *  */

let data: {};

let data2: object = { age: 23 };

//联合类型
let str: string | number = 3;
console.log("str:", str);

//交叉类型
type Obj1 = { username: string };
type Obj2 = { age: number };
let Obj1: Obj1 = { username: "abc" };
let Obj2: Obj2 = { age: 23 };

let obj3: Obj1 & Obj2 = { username: "wangwu", age: 40 };

//字面量数据类型
type num = 1 | 2 | 3;
let n: num = 3;
// let n:num = 4
// type A = number | string;
// let a: A = "Abc";
// type num = number;
// let n:num=3;

type increaseFlag = 0 | 1;
function isStartUp(increase: increaseFlag) {
  if (increase) {
    console.log("open");
  } else {
    console.log("close");
  }
}

isStartUp(1);
