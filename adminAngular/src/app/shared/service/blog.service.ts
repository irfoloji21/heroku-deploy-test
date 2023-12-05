import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:8000/api/v2';

  constructor(private http: HttpClient) { }


  getBlog(): Observable<any> {
    return this.http.get<any>(`/blog/get-all-blogs`);
  }

  getBlogById(id): Observable<any> {
    return this.http.get<any>(`/blog/get-blog/${id}`);
  }


  createBlog(blogData): Observable<any> {
    return this.http.post<any>(`/blog/create-blog`, blogData);
  }

  deleteBlog(id): Observable<any> {
    return this.http.delete<any>(`/blog/delete-blog/${id}`);
  }

  updateBlog(id, blogData): Observable<any> {
    return this.http.put<any>(`/blog/update-blog/${id}`, blogData);
  }
  

}
