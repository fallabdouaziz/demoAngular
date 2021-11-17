import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../interface/products'

@Component({
  selector: 'app-product-alerts-component',
  templateUrl: './product-alerts-component.component.html',
  styleUrls: ['./product-alerts-component.component.css']
})
export class ProductAlertsComponentComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() notify= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
