export const money = (value: number | null | undefined) => value == null ? 'Liên hệ xác nhận' : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(value)
export const getError = (error: unknown) => error instanceof Error ? error.message : 'Đã có lỗi xảy ra. Vui lòng thử lại.'
