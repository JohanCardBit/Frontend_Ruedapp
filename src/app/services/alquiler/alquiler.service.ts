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
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'authorization': `Bearer ${token}`
    });
    return { headers };
  }

  postAlquilar(estacionSalida: string, serial: string) {
    return this.http.post(`${this.apiUrl}/alquilar/create`, { estacionSalida, serial }, this.header());
  }


  postDevolver(estacionLlegada: string) {
    return this.http.post(`${this.apiUrl}/alquiler/devolver`, { estacionLlegada }, this.header());
  };

  getAlquilerActivoUser() {
    return this.http.get(`${this.apiUrl}/alquiler/activo/user`, this.header());
  }

  getHistorialAlquileresUser() {
    return this.http.get(`${this.apiUrl}/alquiler/historial/user`, this.header());
  }

}
