/** Admin-specific types — extend when building dashboard */

export interface AdminUser {
  id: string;
  email: string;
  role: "admin" | "staff";
  name: string;
}

export interface VaccinationRecord {
  id: string;
  goatId: string;
  vaccineName: string;
  administeredAt: string;
  nextDueAt?: string;
  veterinarian: string;
  notes?: string;
}

export interface BreedingRecord {
  id: string;
  buckId: string;
  doeId: string;
  matingDate: string;
  expectedKiddingDate?: string;
  actualKiddingDate?: string;
  offspringIds?: string[];
  notes?: string;
}

export interface CustomerInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  goatId?: string;
  status: "new" | "contacted" | "closed";
  createdAt: string;
}

export interface SaleRecord {
  id: string;
  goatIds: string[];
  customerName: string;
  customerPhone: string;
  amount: number;
  saleDate: string;
  deliveryStatus: "pending" | "delivered";
  notes?: string;
}
