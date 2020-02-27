import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { API_BASE } from 'src/app/app.constants';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${API_BASE}/category`);
  }

  find(id: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${API_BASE}/category/${id}`);
  }

  getByParent(id: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${API_BASE}/category?group_id=${id}`);
  }
}
