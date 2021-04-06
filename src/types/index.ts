export type Gift = {
  id: string;
  description: string;
  image?: string;
  reservedBy?: number;
};

export type Gifts = Gift[];

export type User = {
  id: number;
  name: string;
};

export type Users = User[];

export interface State {
  users: Users;
  currentUser: User | null;
  gifts: Gifts;
}
