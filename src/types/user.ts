import type { RecentDocument } from './document';

export interface UserDashboardData {
  name: string;
  role: string;
  profileImageUrl: string;
  portfolioViews: number;
  recentDocs: RecentDocument[];
}
