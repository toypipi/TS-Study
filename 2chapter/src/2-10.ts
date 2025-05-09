/**
 * 使用 ts-node 运行 TypeScript 代码
 * npm install -g ts-node
 * ts-node hello.ts
 *
 * 枚举的好处：
 * 1.有默认值和可以子增值，节省编码时间
 * 2.语义更清晰，可读性增强
 */

// 数字枚举，双重映射
enum Week {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
console.log(Week.Monday);
console.log(Week["Monday"]);
console.log(Week[1]);

// 字符串枚举
enum WeekEnd {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

console.log(WeekEnd.Monday);
console.log(WeekEnd["Monday"]);
