interface Student {
  name: String;
  age: Number;
}

// 类型注解：开发者显式地告诉 TypeScript 编译器一个变量、函数参数或函数返回值应该是什么类型
let data: number = 123; // 明确指定 data 变量的类型是 number
let stuObj: Student = {
  // 明确指定 stuObj 变量的类型是 Student 接口类型
  name: "wangwu",
  age: 123,
};

// 类型推导: 当变量在声明时被初始化，或者函数有返回值时，如果开发者没有显式地指定类型，TypeScript 编译器会自动分析并推断出变量或返回值的类型
// 类型推导
let money = 123; // TypeScript 推断 money 的类型是 number，因为初始值是数字 123
let stuObj2 = {
  // TypeScript 推断 stuObj2 的类型是 { name: string; age: number; }
  name: "wangwu", //   因为它根据对象的结构推断出每个属性的类型
  age: 23,
};

export {};
