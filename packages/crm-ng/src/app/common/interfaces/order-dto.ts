import { OrderStatus } from '../enums';

export interface OrderDto {
  id: number;
  createdDate: string;
  customer: any;
  visitDate: string;
  status: OrderStatus;
  master: any;
  service: any;
  finishStatus: string;
}
