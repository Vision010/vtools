import { numberFormat } from '../FormatKit'

describe('numberFormat test', () => {
  it('string format test', () => {
    expect(numberFormat('53014')).toBe('5.3万+')
    expect(numberFormat('530143')).toBe('53万+')
    expect(numberFormat('5301433')).toBe('5百万+')
    expect(numberFormat('53014334')).toBe('5千万+')
    expect(numberFormat('530143341')).toBe('5亿+')
    expect(numberFormat('5301433413')).toBe('53亿+')
    expect(numberFormat('53014334131')).toBe('5百亿+')
    expect(numberFormat('530143341312')).toBe('5千亿+')
    expect(numberFormat('5301433413121')).toBe('5301433413121')
  })
  it('number format test', () => {
    expect(numberFormat(53014)).toBe('5.3万+')
    expect(numberFormat(530143)).toBe('53万+')
    expect(numberFormat(5301433)).toBe('5百万+')
    expect(numberFormat(53014334)).toBe('5千万+')
    expect(numberFormat(530143341)).toBe('5亿+')
    expect(numberFormat(5301433413)).toBe('53亿+')
    expect(numberFormat(53014334131)).toBe('5百亿+')
    expect(numberFormat(530143341312)).toBe('5千亿+')
    expect(numberFormat(5301433413121)).toBe('5301433413121')
  })
})
