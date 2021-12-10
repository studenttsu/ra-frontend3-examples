import { Component, OnInit } from '@angular/core';
import { OrdersFilterData } from './types';
import { OrdersApiService } from '../services/orders-api.service';
import { HttpClient } from '@angular/common/http';
import { OrderDto } from '../common/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: OrderDto[] = [];

  constructor(
    private ordersApi: OrdersApiService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this._reload();
  }

  filterData(data: OrdersFilterData) {
    this._reload(data);
  }

  async auth() {
    const response: any = await this.http.post('https://beauty-saloon-server.herokuapp.com/api/login',
      { userName: 'admin', password: 'admin' }
    ).toPromise();

    localStorage.setItem('token', response.access_token);
  }

  private async _reload(data?: OrdersFilterData) {
    this.orders = await this.ordersApi.getOrders(data);
  }

}
