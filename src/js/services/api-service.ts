import { API_PATH } from "../consts";
import { CreateOrderDto, ServiceDto, StaffDto } from "../interfaces";
import { HttpService } from "./http-service";

class ApiService extends HttpService {
    constructor() {
        super(API_PATH);
    }

    getServices(): Promise<ServiceDto[]> {
        return this.get('services');
    }

    getStaff(): Promise<StaffDto[]> {
        return this.get('staff');
    }

    createOrder(order: CreateOrderDto) {
        return this.post('orders', order);
    }
}

export default new ApiService();