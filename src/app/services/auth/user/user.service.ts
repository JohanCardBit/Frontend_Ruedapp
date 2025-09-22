import { Injectable } from '@angular/core';
import { ApiUrl } from '../../../environments/api-url';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = ApiUrl.url;
  constructor(private http: HttpClient) { }

  postRegister(bodyRegister: any) {
    return this.http.post(`${this.apiUrl}/register`, bodyRegister)
  };



  header() {
    const token = sessionStorage.getItem('token')
    const headers = new HttpHeaders({
      'authorization': `Bearer ${token}`
    })
    return headers
  };


  getUsers() {
    const headers = this.header()
    return this.http.get(`${this.apiUrl}/users`, { headers })
  }


  getMe() {
    const headers = this.header()
    return this.http.get(`${this.apiUrl}/user/me`, { headers })
  }

  updateUser(id: string, body: any) {
    const headers = this.header();
    return this.http.put(`${this.apiUrl}/user/update/${id}`, body, { headers });
  }

}
