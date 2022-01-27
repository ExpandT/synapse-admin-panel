import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../core/product.service";
import {tap} from "rxjs";
import {Product} from "../../interfaces/product";
import {ProductReview} from "../../interfaces/product-review";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'sap-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  form = this.formBuilder.group({
    text: [''],
    rate: ['', Validators.required],
  })

  productReviews: ProductReview[] = [];

  get productImage(): string {
    return `http://smktesting.herokuapp.com/static/${this.selectedProduct.img}`
  }

  get selectedProductId(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  get selectedProduct(): Product {
    return this.route.snapshot.data['products'].find( (product: Product) => product.id === this.selectedProductId);
  }

  constructor(private readonly formBuilder: FormBuilder, private readonly route: ActivatedRoute, private readonly productService: ProductService, private readonly changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getProductReviews();
  }

  getProductReviews(): void {
      this.productService.getProductReviews(this.selectedProductId).pipe(tap(res => {
        this.productReviews = res;
        this.changeDetector.markForCheck();
      })).subscribe();
  }

  postReview(): void {
    const reviewData = this.form.getRawValue();

    this.productService.postReview(this.selectedProductId, reviewData).pipe(tap(res => console.log(res))).subscribe();
  }

}
