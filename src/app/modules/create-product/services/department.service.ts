import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { API_BASE } from 'src/app/app.constants';

@Injectable()
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Deparment[]> {
    return this.http.get<Deparment[]>(`${API_BASE}/department`);
  }
}
