import { Injectable } from '@angular/core';
import { ApiUrl } from '../../../environments/api-url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = ApiUrl.url;
  constructor(private http: HttpClient) { }

  postRegister(bodyRegister: any) {
return this.http.post(`${this.apiUrl}/register`, bodyRegister)
  };
}
