import type { BookingData, BookingResult, City, Quote, QuoteInput, Service, ServiceDetail } from '../types'

const baseUrl = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000').replace(/\/$/, '')

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, init)
  const body = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(body.error || 'Không thể kết nối đến máy chủ. Vui lòng thử lại.')
  return body as T
}

const unwrap = <T>(value: T | { data: T }): T => ('data' in (value as object) ? (value as { data: T }).data : value as T)
export const api = {
  getServices: async () => unwrap(await request<Service[] | { data: Service[] }>('/api/public/services')),
  getService: async (slug: string) => request<ServiceDetail>(`/api/public/services/${encodeURIComponent(slug)}`),
  getCities: async () => unwrap(await request<City[] | { data: City[] }>('/api/public/cities')),
  preview: (data: QuoteInput) => request<Quote>('/api/public/booking-requests/preview', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }),
  createBooking: async (data: BookingData, files: File[]) => {
    if (files.length === 0) return request<BookingResult>('/api/public/booking-requests', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    const form = new FormData()
    Object.entries(data).forEach(([key, value]) => form.append(key, key === 'addons' ? JSON.stringify(value) : String(value ?? '')))
    files.forEach(file => form.append('files', file))
    return request<BookingResult>('/api/public/booking-requests', { method: 'POST', body: form })
  }
}
