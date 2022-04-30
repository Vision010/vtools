/* eslint-disable node/no-missing-require */
describe('NODE_ENV = development', () => {
  const OLD_ENV = process.env
  beforeEach(() => {
    process.env = { ...OLD_ENV, NODE_ENV: 'development' }
  })
  it('isProduct', () => {
    expect(require('../EnvKit').isProduct).toBe(false)
  })
  it('isDevelopment', () => {
    expect(require('../EnvKit').isDevelopment).toBe(true)
  })
})

// TODO: 这个有问题，需要检查
// describe('NODE_ENV = production', () => {
//   const OLD_ENV = process.env
//   beforeEach(() => {
//     process.env = { ...OLD_ENV, NODE_ENV: 'production' }
//   })
//   it('isProduct', () => {
//     expect(require('../EnvKit').isProduct).toBe(true)
//   })
//   it('isDevelopment', () => {
//     expect(require('../EnvKit').isDevelopment).toBe(false)
//   })
// })
