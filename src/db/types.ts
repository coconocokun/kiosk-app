export interface Item {
  id: number;
  title: string;
  description: string;
  tag: string[];
  price: number;
  category: string;
  pic: string;
  stock: number;
}

export interface Order {
  id: number;
  items: { itemId: number; count: number }[];
  created_at: Date;
  total_price: number;
}

export const orders: Order[] = [];
