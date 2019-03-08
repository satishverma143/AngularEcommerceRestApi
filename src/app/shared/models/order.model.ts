import {Address} from './address.model';

export class Order {
  id: number;
  order_status: string;
  tracking_number: string;
  order_items_count: number;
  total: number;
  total_amount: number;
  created_at: string;
  updated_at: string;
  address?: Address;
}