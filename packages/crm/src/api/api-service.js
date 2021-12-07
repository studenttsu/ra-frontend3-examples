import { API_PATH } from '@beauty/common/constants';
import { HttpService } from '../services/http-service';

export class ApiService extends HttpService {

  constructor() {
    super(API_PATH);
  }

  getCustomers() {
    return this.get('customers');
  }

  login(authData) {
    return this.post('login', authData);
  }

}

export default new ApiService();