import { HttpService } from "./http-service";

class ApiService extends HttpService {
    constructor() {
        super();
    }

    getServices() {
        return this.get('services');
    }

    getStaff() {
        return this.get('staff');
    }

    createOrder(order) {
        return this.post('orders', order);
    }
}

export default new ApiService();