/**
 * 单例
 */
class DateUtil {
  static dateUtil = new DateUtil();
  private constructor() {}
  formatDate() {
    console.log("formatDate");
  }
  diffDateByDay() {}
  diffDateByHour() {}
  timeConversion(restTime: number) {}
}

const dateUtil1 = DateUtil.dateUtil;
const dateUtil2 = DateUtil.dateUtil;
console.log(dateUtil1 === dateUtil2);
dateUtil1.formatDate();
export default DateUtil.dateUtil;
export {};

// 静态方法
// export default class DateUtil {
//   static formatDate() {
//     console.log("formatDate");
//   }
//   static diffDateByDay() {}
//   static diffDateByHour() {}
//   static timeConversion(restTime: number) {}
// }
// DateUtil.formatDate()
