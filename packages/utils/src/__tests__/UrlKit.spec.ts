import { getQuery } from '../URLKit'

describe('getQuery', () => {
  it('get url query params', () => {
    expect(getQuery('?q=a&b=d')).toStrictEqual({ q: 'a', b: 'd' })
  })

  // it('get url query params for no search', () => {
  //   expect(getQuery('q=a&b=d')).toThrow('params is not a search')
  // })
})
