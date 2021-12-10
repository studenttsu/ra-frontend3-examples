import { Component } from '@angular/core';

interface Link {
  path: string;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: Link[] = [
    {
      path: '',
      label: 'Стартовая'
    },
    {
      path: 'orders',
      label: 'Заявки'
    }
  ];
}
