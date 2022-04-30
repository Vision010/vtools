export type JudgeObjectNullObj<T extends JudgeObjectNullObj<T> = JudgeObjectNullObj<never>> =
  | Record<string, T>
  | Array<T>
  | string
  | number
  | boolean
/**
 * 判断对象是否为空
 * 不支持除普通对象与数组外的 Object (Date, Regx...)
 * @param obj
 */
export function judgeObjectNull<T extends JudgeObjectNullObj<T>>(
  obj: JudgeObjectNullObj<T>
): boolean {
  const type = Object.prototype.toString.call(obj)?.slice(8, -1)

  const isBaseType =
    typeof obj === 'number' ||
    typeof obj === 'string' ||
    typeof obj === 'boolean' ||
    typeof obj === 'undefined' ||
    type === 'Null'

  if (isBaseType) return !obj

  if (!['Object', 'Array'].includes(type)) {
    throw new Error(`don't input special object: ${type}`)
  }

  if (obj instanceof Array) return obj.filter((v) => v).length === 0

  return !Object.keys(obj).filter((v) => obj[v] && !judgeObjectNull(obj[v])).length
}
