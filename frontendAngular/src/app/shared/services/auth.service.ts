import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api/v2';
  private userId: string | null = null;
  private user: any;
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isLoggedInSubject.next(isLoggedIn);
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('isLoggedIn', this.isLoggedInSubject.value ? 'true' : 'false');
    });
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`/user/login-user`, body, { headers, withCredentials: true })
      .pipe(tap(user => {
        if (user.success) {
          localStorage.setItem('isLoggedIn', 'true');
          this.isLoggedInSubject.next(true);
        } else {
          this.isLoggedInSubject.next(false);
        }
      }));
  }

  updateUserAddress(userId: string, addressData: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(
      `/user/update-user-addresses/${userId}`,
      addressData,
      { headers, withCredentials: true }
    );
  }
  
  deleteUserAddress(addressId: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<any>(`/user/delete-user-address/${addressId}`, { headers, withCredentials: true });
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedInSubject.next(false);
    this.user = null;
  }

  register(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    const data = { firstName, lastName, email, password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`/user/create-user`, data, { headers, withCredentials: true })
      .pipe(tap(user => this.user = user));
  }

  setUserId(userId: string) {
    this.userId = userId;
    console.log("user id setUserId", userId);
  }

  getUserId(): string | null {
    console.log("user id getUserId", this.userId);
    return this.userId;
  }

  loadUser(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(`/user/getuser`, { headers, withCredentials: true });
  }

  async initUser(): Promise<void> {
    try {
      const response = await this.loadUser().toPromise();
      this.user = response.user;
      return this.user;
    } catch (error) {
      console.error('Kullanıcı bilgileri yüklenirken hata oluştu:', error);
    }
  }

  setUser(user: any): void {
    this.user = user;
  }
  
  getUser(): any {
    return this.user;
  }

  activateUser(activation_token: string): Observable<any> {
    return this.http.post(`/user/activation`, { activation_token });
  }

  updateUserPassword(oldPassword: string, newPassword: string, confirmPassword: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`/user/update-user-password`, { oldPassword, newPassword, confirmPassword }, { headers, withCredentials: true });
  }

  updateUser(userInfo: any, ): Observable<any> {
    // Kullanıcı bilgilerini güncellemek için API'ye istek gönder
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(`/user/update-user-info`, userInfo, { headers, withCredentials: true });
  }
}



