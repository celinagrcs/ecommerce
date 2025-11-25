export interface Order {
  id: string;
  date: string;
  items: {
    id: number;
    title: string;
    price: string;
    quantity: number;
    image: string;
  }[];
  total: number;
}