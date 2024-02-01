export interface PostType {
  _id: string;
  title: string;
  img?: string;
  desc: string;
  userId: string;
  slug: string;
}

export interface UserType {
  _id: string;
  username: string;
  img?: string;
  email: string;
  isAdmin: boolean;
  password: string;
}
