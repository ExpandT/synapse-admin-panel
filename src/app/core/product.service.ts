import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product";
import {ProductReview} from "../interfaces/product-review";
import {ReviewForm} from "../interfaces/review-form";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const url = `${environment.url}/products/`;

    return this.httpClient.get<Product[]>(url);
  }

  getProductReviews(id: number): Observable<ProductReview[]> {
    const url = `${environment.url}/reviews/${id}`

    return this.httpClient.get<ProductReview[]>(url);
  }

  postReview(id: number, reviewData: ReviewForm) {
    const url = `${environment.url}/reviews/${id}`;

    return this.httpClient.post(url, reviewData);
  }

}
