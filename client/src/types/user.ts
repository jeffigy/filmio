export interface User {
  userId: string;
  email: string;
  roles: string[];
  active: boolean;
  createdAt: Date;
}
