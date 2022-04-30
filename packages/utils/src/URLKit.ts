import { isBrowser } from './EnvKit'

export function getQuery<T extends LooseObject = LooseObject>(search = ''): T {
  let query: T = {} as T
  if (isBrowser && !search) {
    search = window.location.search
  }
  // if (search.indexOf('?') !== 0) {
  //   throw new Error('params is not a search')
  // }
  try {
    query = (search
      ?.substring(1)
      .split('&')
      .reduce((pre, cur) => {
        const tmp = cur.split('=')
        return { ...pre, [tmp[0]]: tmp[1] }
      }, {}) || {}) as T
  } catch (error) {
    console.warn(error)
  }
  return query
}
