import dayjs from 'dayjs'

export interface FormateDate {
  (
    date?: string | number | Date | dayjs.Dayjs | null,
    options?: { placeholder?: string; format?: string }
  ): string
}

/**
 * 格式化时间为YYYY-MM-DD HH:mm
 * @param date
 * @returns
 */
export const formateDate: FormateDate = (
  date,
  { placeholder = '-', format = 'YYYY-MM-DD HH:mm:ss' } = {}
) => {
  return date ? dayjs(date).format(format) : placeholder
}
