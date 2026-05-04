export type DocType = "ATS CV" | "Visual Resume" | "Web Portfolio";
export type DocStatus = "Selesai" | "Draf" | "Diterbitkan";

export interface RecentDocument {
  id: string;
  title: string;
  type: DocType;
  status: DocStatus;
  date: string;
}

export interface UserDashboardData {
  name: string;
  role: string;
  profileImageUrl: string;
  portfolioViews: number;
  recentDocs: RecentDocument[];
}
