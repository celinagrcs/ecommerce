export interface CartItem {
  id: number;
  title: string;
  author: string;
  price: string;
  image: string;
  description?: string;
  quantity: number;
}