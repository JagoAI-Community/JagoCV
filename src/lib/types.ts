// Tipe Enum dokumen — disesuaikan dengan nilai Prisma
export type DocType = "ATS_CV" | "VISUAL_RESUME" | "WEB_PORTFOLIO";
export type DocStatus = "SELESAI" | "DRAF" | "DITERBITKAN";
export type UserRole = "USER" | "ADMIN";
export type SubscriptionTier = "BIASA" | "GO" | "ULTRA";

// Label tampilan yang ramah — dari nilai DB ke teks UI
export const DOC_TYPE_LABELS: Record<DocType, string> = {
  ATS_CV: "ATS CV",
  VISUAL_RESUME: "Visual Resume",
  WEB_PORTFOLIO: "Web Portfolio",
};

export const DOC_STATUS_LABELS: Record<DocStatus, string> = {
  SELESAI: "Selesai",
  DRAF: "Draf",
  DITERBITKAN: "Diterbitkan",
};

export const SUBSCRIPTION_LABELS: Record<SubscriptionTier, string> = {
  BIASA: "Biasa",
  GO: "Go",
  ULTRA: "Ultra",
};

export interface RecentDocument {
  id: string;
  title: string;
  type: DocType;
  status: DocStatus;
  createdAt: string; // ISO date string — diformat oleh frontend
  templateId?: string;
  fontFamily?: string;
  themeColor?: string;
  deletedAt?: string | null;
}

export interface UserDashboardData {
  name: string;
  role: UserRole;
  profileImageUrl: string;
  subscriptionTier: SubscriptionTier;
  aiCredits: number;
  portfolioViews: number;
  recentDocs: RecentDocument[];
}
