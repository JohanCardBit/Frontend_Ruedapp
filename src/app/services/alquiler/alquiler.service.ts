import { Injectable } from '@angular/core';
import { ApiUrl } from '../../environments/api-url';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  private apiUrl: string = ApiUrl.url;
  constructor(private http: HttpClient) { }

  private header() {
    const token = sessionStorage.getItem('token'); // 👈 aquí debe estar guardado tu JWT
    const headers = new HttpHeaders({
      'authorization': `Bearer ${token}`
    });
    return { headers };
  }

  postAlquilar(estacionSalida: string, serial: string) {
    return this.http.post(`${this.apiUrl}/alquilar/create`, { estacionSalida, serial }, this.header());
  }
}
