import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { API_BASE } from 'src/app/app.constants';

@Injectable()
export class GroupService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Deparment[]> {
    return this.http.get<Group[]>(`${API_BASE}/group`);
  }

  find(id: string): Observable<Group[]> {
    return this.http.get<Group[]>(`${API_BASE}/group/${id}`);
  }

  getByParent(id: string): Observable<Group[]> {
    return this.http.get<Group[]>(`${API_BASE}/group?department_id=${id}`);
  }
}
