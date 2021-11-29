import {ApiService} from '../services';

export class OrderForm {
    async handleForm() {
        const data = {};

        const masters = await ApiService.getMasters();

        masters.forEach(master => {
            // 
        });
    }
}