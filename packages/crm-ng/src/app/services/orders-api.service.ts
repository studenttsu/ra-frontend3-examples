import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OrdersFilterData } from '../orders/types';
import { OrderDto } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {

  constructor(private _http: HttpClient) { }

  public getOrders(filterData?: OrdersFilterData): Promise<OrderDto[]> {
    let params = new HttpParams();

    if (filterData) {
      if (filterData.from) {
        params = params.append('from', filterData.from);
      }

      if (filterData.to) {
        params = params.append('to', filterData.to);
      }

      if (filterData.status) {
        params = params.append('status', filterData.status);
      }

      if (filterData.search) {
        params = params.append('search', filterData.search);
      }
    }

    return this._http.get<OrderDto[]>('https://beauty-saloon-server.herokuapp.com/api/orders', { params })
      .toPromise();
  }

}
