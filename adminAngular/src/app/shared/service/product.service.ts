import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8000/api/v2'; // apiUrl burada tanımlandı

  constructor(private http: HttpClient) { }

  createProduct(productData: any): Observable<any> {
    return this.http.post<any>(`/product/create-product`, productData);
  }

  getShopProduct(id): Observable<any> {
    return this.http.get<any>(`/product/get-all-products-shop/${id}`);
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete<any>(`/product/delete-shop-product/${id}`);
  }

  getProductById(id): Observable<any> {
    return this.http.get<any>(`/product/get-product-by-id/${id}`);
  }

  updateProduct(id, productData): Observable<any> {
    return this.http.put<any>(`/product/update-product/${id}`, productData);
  }

 
}
