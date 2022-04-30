import { isBrowser } from './EnvKit'

/**
 * @description 获取user-agent
 * @param {string?} serviceUserAgent 非浏览器环境可以手动传入ua
 */
export const getFinalUserAgent = (serviceUserAgent?: string): string => {
  if (isBrowser && !serviceUserAgent) {
    return window?.navigator?.userAgent ?? ''
  }
  return serviceUserAgent || ''
}

/**
 * @description 获取浏览器信息
 * @param {string?} 非浏览器环境可以手动传入ua
 */
export function getBrowser(serviceUserAgent?: string): PlatformCheckReturnType {
  const ua = getFinalUserAgent(serviceUserAgent)
  let ret: PlatformCheckReturnType = 'unknown'
  if (ua.indexOf('Chrome') > -1) {
    ret = 'chrome'
  }
  if (
    (ua.indexOf('compatible') > -1 && ua.indexOf('MSIE') > -1) ||
    (ua.indexOf('like Gecko') > -1 && ua.indexOf('rv') > -1)
  ) {
    ret = 'ie'
  }
  if (ua.indexOf('Opera') > -1) {
    ret = 'opera'
  }
  if (ua.indexOf('Edge') > -1) {
    ret = 'edge'
  }
  if (ua.indexOf('Firefox') > -1) {
    ret = 'firefox'
  }
  if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1) {
    ret = 'safari'
  }
  if (ua.indexOf('QQBrowser') > -1) {
    ret = 'qq'
  }
  if (ua.indexOf('UCBrowser') > -1) {
    ret = 'uc'
  }
  if (ua.indexOf('MQQBrowser') > -1) {
    ret = 'qq mobile'
  }
  if (ua.indexOf('MicroMessenger') > -1) {
    ret = 'wechat'
  }
  if (ua.indexOf('Weibo') > -1) {
    ret = 'weibo'
  }
  return ret
}

/**
 * @description 是否为ios
 * @param {string?} 非浏览器环境可以手动传入ua
 */
export function isIos(serviceUserAgent?: string): boolean {
  const ua = getFinalUserAgent(serviceUserAgent)
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

/**
 * @description 是否为安卓
 * @param {string?} 非浏览器环境可以手动传入ua
 */
export function isAndroid(serviceUserAgent?: string): boolean {
  const ua = getFinalUserAgent(serviceUserAgent)
  return ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1
}

/**
 * @description 是否为移动端
 * @param {string?} 非浏览器环境可以手动传入ua
 */
export function isMobile(serviceUserAgent?: string): boolean {
  const ua = getFinalUserAgent(serviceUserAgent)
  return !!ua.match(/AppleWebKit.*Mobile.*/) && !!ua.match(/AppleWebKit/)
}

/**
 * @description 是否为PC端
 * @param {string?} 非浏览器环境可以手动传入ua
 */
export function isPC(serviceUserAgent?: string): boolean {
  return !isMobile(serviceUserAgent)
}

/**
 * @description 是否在小程序环境
 * @param {string?} 非浏览器环境可以手动传入ua
 */
export function isMiniProgram(serviceUserAgent?: string): boolean {
  const browser = getBrowser(serviceUserAgent)
  // ios的ua中无miniProgram，因此得多加一层判断
  if (browser === 'wechat') {
    window?.wx?.miniProgram?.getEnv?.((res: Record<string, unknown>) => {
      if (res.miniprogram) {
        return true
      }
      return false
    }) ?? false
  }
  return false
}

/** 平台检测返回类型 */
type PlatformCheckReturnType =
  | 'unknown'
  | 'chrome'
  | 'ie'
  | 'opera'
  | 'edge'
  | 'firefox'
  | 'safari'
  | 'qq'
  | 'uc'
  | 'qq mobile'
  | 'wechat'
  | 'weibo'
