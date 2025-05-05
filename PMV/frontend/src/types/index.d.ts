export interface Restaurant {
  name: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
}

export interface User {
  email: string;
  password: string;
  role: 'admin' | 'user';
}
