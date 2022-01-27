import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'sap-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  displayedColumns: string[] = ['title', 'text', 'actions'];
  products: Product[] = this.route.snapshot.data['products'];

  constructor(private readonly route: ActivatedRoute) { }
}
