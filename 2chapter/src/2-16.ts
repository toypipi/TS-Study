/**
 * 索引访问类型
 */
const symid = Symbol("productno");

interface Product {
  [symid]: number;
  name: string;
  price: number;
  account: number;
  buy(): void;
}

type A = Product["price"];
type B = Product["price" | "name"];
type S = Product[typeof symid];

type Pkeys = keyof Product; // "name"|"price"|"account"|"buy"|typeof symid
let pKeys: Pkeys = "account";

type AllKeys<T> = T extends any ? T : never;
type Pkeys2 = AllKeys<keyof Product>;

export {};
