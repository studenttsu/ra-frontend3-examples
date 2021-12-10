import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderStatus } from '../../../common/enums';
import { OrdersFilterData } from '../../types';

@Component({
  selector: 'app-orders-filter',
  templateUrl: './orders-filter.component.html',
  styleUrls: ['./orders-filter.component.scss']
})
export class OrdersFilterComponent implements OnInit {

  @Output()
  filter: EventEmitter<OrdersFilterData>;

  OrderStatus = OrderStatus;
  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.filter = new EventEmitter<OrdersFilterData>();

    this.form = this._fb.group({
      date: '',
      status: OrderStatus.Opened,
      search: ''
    });
  }

  ngOnInit(): void {
  }

  handleForm() {
    const { search, date, status } = this.form.value;
    const data: OrdersFilterData = {search, status, from: '', to: ''};

    if (date) {
      const [from, to] = date;
      data.from = from;
      data.to = to;
    }

    this.filter.emit(data);
  }

}
