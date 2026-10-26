export interface OrderPayload {
  lead_id: string;
  product_name: string;
  product_price: number;
  shipping_fee: number;
  total_amount: number;
  customer_name: string;
  phone: string;
  city: string;
  address: string;
  status: 'pending' | 'confirmed' | 'delivered';
}
