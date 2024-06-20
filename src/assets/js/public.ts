/* 零位补齐 */
export const zeroReplenish = (num: string | number, length = 2):string => {
  num = num.toString();
  return num.padStart(length, "0");
}