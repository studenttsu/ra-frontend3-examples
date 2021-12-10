import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';
import { OrdersFilterComponent } from './components/orders-filter/orders-filter.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrdersComponent
      }
    ]),
    NzDatePickerModule,
    NzButtonModule,
    NzSelectModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
