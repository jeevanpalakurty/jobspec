import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Role } from '../_models/index';

@Injectable()
export class RoleService {
  private _currentUserRole: Role = new Role();

  constructor(private http: Http) { }

  getUserRoles() {
        return this.http.get('/api/roles').map((response: Response) => response.json());
    }

  userRole() {
    return this._currentUserRole;
  }
}
