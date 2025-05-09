/**
 * 元组
 */

let salary: [string, number, number, number] = ["Jake", 5000, 5500, 5000];
console.log(salary[0]);

// 数组和数组元素同时为只读
const account = [10, 20, 30, 40, 50] as const;
// account[2] = 300;

// 元组
// let customer: [string, number, string, string, string] = [
//   "Mike",
//   22,
//   "海口海鼎岛8号",
//   "124566423",
//   "一起飞",
// ];
// 可变元组
// let [username, age, address, ...rest]: [string, number, string, ...any[]] = [
//   "Mike",
//   22,
//   "海口海鼎岛8号",
//   "124566423",
//   "一起飞",
// ];
// console.log(rest);

// 可变元素 tag
let [username, age, address, ...rest]: [
  username_: string,
  age_: number,
  addr_: string,
  ...rest_: any[]
] = ["Mike", 22, "海口海鼎岛8号", "124566423", "一起飞"];
console.log(rest);

export {};
