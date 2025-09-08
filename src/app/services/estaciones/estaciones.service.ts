import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from '../../environments/api-url';

@Injectable({
  providedIn: 'root'
})
export class EstacionesService {
  private apiUrl: string = ApiUrl.url
  constructor(private http: HttpClient) { }

  header() {
    const token = sessionStorage.getItem('token')
    const headers = new HttpHeaders({
      'authorization': `Bearer ${token}`
    })
    return headers
  };


  getEstaciones() {
    const headers = this.header()
    return this.http.get(`${this.apiUrl}/estaciones`, { headers })
  }

  updateEstacion(body: any, id: any) {
    const headers = this.header()
    return this.http.put(`${this.apiUrl}/estacion/update/${id}`, body, { headers })
  }

  getOneEstacion(id: any) {
    const headers = this.header()
    return this.http.get(`${this.apiUrl}/estacion/${id}`, { headers })
  }

  putEstado(id: any){
    const headers = this.header()
    return this.http.put(`${this.apiUrl}/estacion/estado/${id}`, {}, {headers})
  }
}
