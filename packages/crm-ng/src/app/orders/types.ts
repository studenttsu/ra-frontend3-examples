import { OrderStatus } from '../common/enums';

export interface OrdersFilterData {
  from: string;
  to: string;
  search: string;
  status: OrderStatus;
}
