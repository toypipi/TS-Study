/**
 * 接口
 */

interface Product {
  name: string;
  price: number;
  account: number;
  buy(): void;
}

let p: Product = {
  name: "phone",
  price: 100,
  account: 10,
  buy() {},
};

interface Pet {
  name: string;
  love: number;
  health: number;
  toHealth(): void;
}

interface Dog extends Pet {
  strain: string;
  guardHome(): void;
}

export {};
