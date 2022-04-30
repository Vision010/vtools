// 是否浏览器环境
export const isBrowser = typeof window !== 'undefined'

// 是否生产环境
export const isProduct = process.env.NODE_ENV === 'production'

// 是否开发环境
export const isDevelopment = process.env.NODE_ENV === 'development'
