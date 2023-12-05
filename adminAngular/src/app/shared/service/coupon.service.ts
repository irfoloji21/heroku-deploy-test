import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private apiUrl = 'http://localhost:8000/api/v2'; // apiUrl burada tanımlandı

  constructor(private http: HttpClient) { }

  createCoupoun(coupounData: any): Observable<any> {
    return this.http.post<any>(`/coupon/create-coupon-code`, coupounData);
  }

  getCoupoun(id): Observable<any> {
    return this.http.get<any>(`/coupon/get-coupon/${id}`);
  }

  deleteCoupoun(id): Observable<any> {
    return this.http.delete<any>(`/coupon/delete-coupon/${id}`);
  }


 
}
