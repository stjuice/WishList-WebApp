
export type User = {
  id: string;
  name: string;
  email: string;
  wishListsIds: string;
};

export type UserState = {
  loading: boolean;
  error: string | null;
  data: User | null; 
}

export type RootState = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
};

export type UserInput = {
  name: string;
  email: string;
}