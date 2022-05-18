import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Product } from '../product.component';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendNotification() {
    this.notify.emit('Thanks for your interest on ' + this.product.name);
  }
}
