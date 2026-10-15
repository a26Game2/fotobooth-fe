export interface Service { id: string; name: string; slug: string; description: string | null; coverImagePath: string | null; startingPrice: number; isActive?: boolean; role?: 'MAIN' | 'ADDON'; mediaType?: 'IMAGE' | 'VIDEO' | null; packageName?: string | null; extraHourPrice?: number | null; note?: string | null; hotLevel?: 1 | 2 | 3 | null }
export interface MainPackage { id: string; serviceId: string; code: string; name: string; durationHours: number | null; isFullDay: boolean; price: number | null; includedMediaCount: number | null; sortOrder: number; isActive: boolean }
export interface AddonPricing { defaultPrice: number | null; includedQuantity: number; incrementQuantity: number; incrementPrice: number | null; unitLabel: string }
export interface AddonService extends Service { addonPricing?: AddonPricing | null }
export interface ServiceDetail extends Service { mainPackages: MainPackage[]; addons: AddonService[] }
export interface City { id: string; name: string; slug: string; defaultTravelFee: number | null; note: string | null }
export interface AddonSelection { serviceId: string; quantity: number }
export interface Quote {
  service: Pick<Service, 'id' | 'name' | 'slug'>; mainPackage: MainPackage; city: Pick<City, 'id' | 'name' | 'slug' | 'note'>;
  addons: { serviceId: string; name: string; quantity: number; unitLabel: string; totalPrice: number | null }[];
  extraHours: number; basePrice: number | null; extraHourPrice: number | null; extraHourAmount: number | null; travelFee: number | null; subtotal: number | null; vatRate: number; vatAmount: number | null; estimatedTotal: number | null; pricingPending: boolean; missingPrices: string[]; currency: string
}
export interface QuoteInput { serviceSlug: string; mainPackageId: string; citySlug: string; extraHours: number; addons: AddonSelection[] }
export interface BookingData extends QuoteInput { eventDate: string; startTime: string; location: string; eventType: string; guestCount: number; customerName: string; phone: string; companyName?: string; customerNote?: string }
export interface BookingResult { bookingCode?: string; code?: string; message?: string; data?: { bookingCode?: string; code?: string; message?: string } }
