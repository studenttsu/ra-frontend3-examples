import { CreateOrderDto, ServiceDto, StaffDto } from '@beauty/common/interfaces';
// @ts-ignore
import { API_PATH } from '@beauty/common/constants';
import { HttpService } from './http-service';

class ApiService extends HttpService {
    constructor() {
        super(API_PATH);
    }

    public getServices(): Promise<ServiceDto[]> {
        return this.get('services');
    }

    public getMasters(): Promise<StaffDto[]> {
        return this.get('staff');
    }

    public createOrder(orderData: CreateOrderDto) {
        return this.post('orders', orderData);
    }
}

export default new ApiService();