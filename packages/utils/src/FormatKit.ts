/**
 * @description 处理数字展现效果
 * @param {number} originNumber 初始数值
 *
 */
export function numberFormat(originNumber: number | string): string {
  const stringified = Number(originNumber).toString()
  const length = stringified.length
  if (length >= 5) {
    const offset = length - 5
    const sa = stringified.split('')
    const map: { [key: number]: string } = {
      0: `${sa[0]}.${sa[1]}万+`,
      1: `${sa[0]}${sa[1]}万+`,
      2: `${sa[0]}百万+`,
      3: `${sa[0]}千万+`,
      4: `${sa[0]}亿+`,
      5: `${sa[0]}${sa[1]}亿+`,
      6: `${sa[0]}百亿+`,
      7: `${sa[0]}千亿+`,
    }
    return map[offset] || stringified
  }
  return stringified
}
